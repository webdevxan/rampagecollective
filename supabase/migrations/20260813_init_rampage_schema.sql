create extension if not exists pgcrypto;

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  description text,
  category text not null,
  base_price numeric(10,2) not null check (base_price >= 0),
  images text[] not null default '{}',
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.product_variants (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references public.products(id) on delete cascade,
  attributes jsonb not null default '{}'::jsonb,
  sku text not null unique,
  stock integer not null default 0 check (stock >= 0),
  price_override numeric(10,2) null check (price_override is null or price_override >= 0),
  created_at timestamptz not null default now()
);

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text not null unique,
  role text not null default 'customer' check (role in ('customer', 'admin')),
  status text not null default 'active' check (status in ('active', 'suspended')),
  created_at timestamptz not null default now()
);

drop trigger if exists on_auth_user_created on auth.users;
drop function if exists public.handle_new_user();

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public, auth
as $$
declare
  source_username text;
begin
  source_username := coalesce(
    new.raw_user_meta_data->>'username',
    split_part(coalesce(new.email, 'user'), '@', 1)
  );

  if exists (select 1 from public.profiles where username = source_username) then
    source_username := source_username || '-' || substr(new.id::text, 1, 8);
  end if;

  insert into public.profiles (id, username, role, status)
  values (
    new.id,
    source_username,
    'customer',
    'active'
  )
  on conflict (id) do nothing;

  return new;
end;
$$;

create or replace trigger on_auth_user_created
after insert on auth.users
for each row
execute function public.handle_new_user();

alter table public.products enable row level security;
alter table public.product_variants enable row level security;
alter table public.profiles enable row level security;

drop policy if exists "Products are publicly readable when active" on public.products;
drop policy if exists "Admins can manage products" on public.products;
drop policy if exists "Admins can update products" on public.products;
drop policy if exists "Admins can delete products" on public.products;
drop policy if exists "Variants are publicly readable when parent product is active" on public.product_variants;
drop policy if exists "Admins can manage variants" on public.product_variants;
drop policy if exists "Admins can update variants" on public.product_variants;
drop policy if exists "Admins can delete variants" on public.product_variants;
drop policy if exists "Users can view own profile" on public.profiles;
drop policy if exists "Admins can view all profiles" on public.profiles;
drop policy if exists "Users can update own profile" on public.profiles;

create policy "Products are publicly readable when active"
on public.products
for select
using (is_active = true);

create policy "Admins can manage products"
on public.products
for insert
with check (
  exists (
    select 1
    from public.profiles p
    where p.id = auth.uid()
      and p.role = 'admin'
  )
);

create policy "Admins can update products"
on public.products
for update
using (
  exists (
    select 1
    from public.profiles p
    where p.id = auth.uid()
      and p.role = 'admin'
  )
)
with check (
  exists (
    select 1
    from public.profiles p
    where p.id = auth.uid()
      and p.role = 'admin'
  )
);

create policy "Admins can delete products"
on public.products
for delete
using (
  exists (
    select 1
    from public.profiles p
    where p.id = auth.uid()
      and p.role = 'admin'
  )
);

create policy "Variants are publicly readable when parent product is active"
on public.product_variants
for select
using (
  exists (
    select 1
    from public.products p
    where p.id = product_variants.product_id
      and p.is_active = true
  )
);

create policy "Admins can manage variants"
on public.product_variants
for insert
with check (
  exists (
    select 1
    from public.profiles p
    where p.id = auth.uid()
      and p.role = 'admin'
  )
);

create policy "Admins can update variants"
on public.product_variants
for update
using (
  exists (
    select 1
    from public.profiles p
    where p.id = auth.uid()
      and p.role = 'admin'
  )
)
with check (
  exists (
    select 1
    from public.profiles p
    where p.id = auth.uid()
      and p.role = 'admin'
  )
);

create policy "Admins can delete variants"
on public.product_variants
for delete
using (
  exists (
    select 1
    from public.profiles p
    where p.id = auth.uid()
      and p.role = 'admin'
  )
);

create policy "Users can view own profile"
on public.profiles
for select
using (auth.uid() = id);

create policy "Admins can view all profiles"
on public.profiles
for select
using (
  exists (
    select 1
    from public.profiles p
    where p.id = auth.uid()
      and p.role = 'admin'
  )
);

create policy "Users can update own profile"
on public.profiles
for update
using (auth.uid() = id)
with check (auth.uid() = id);

create unique index if not exists idx_products_slug on public.products(slug);
create unique index if not exists idx_product_variants_sku on public.product_variants(sku);
