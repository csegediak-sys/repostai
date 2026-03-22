-- Profiles table (extends auth.users)
create table if not exists public.profiles (
  id uuid references auth.users(id) on delete cascade primary key,
  email text,
  plan text not null default 'free' check (plan in ('free', 'starter', 'pro')),
  usage_count integer not null default 0,
  usage_reset_at timestamp with time zone not null default (date_trunc('month', now()) + interval '1 month'),
  lemon_squeezy_customer_id text,
  lemon_squeezy_subscription_id text,
  created_at timestamp with time zone default now()
);

-- Repurpose history
create table if not exists public.repurposes (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  input_text text not null,
  input_url text,
  linkedin_post text not null,
  twitter_thread text not null,
  instagram_caption text not null,
  email_snippet text not null,
  created_at timestamp with time zone default now()
);

-- Auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email)
  values (new.id, new.email);
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- RLS Policies
alter table public.profiles enable row level security;
alter table public.repurposes enable row level security;

create policy "Users can view own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id);

create policy "Users can view own repurposes"
  on public.repurposes for select
  using (auth.uid() = user_id);

create policy "Users can insert own repurposes"
  on public.repurposes for insert
  with check (auth.uid() = user_id);

-- Service role can do everything
create policy "Service role full access profiles"
  on public.profiles for all
  using (true);

create policy "Service role full access repurposes"
  on public.repurposes for all
  using (true);
