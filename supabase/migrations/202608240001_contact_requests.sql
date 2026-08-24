create table if not exists public.contact_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null check (char_length(name) between 2 and 120),
  company text not null check (char_length(company) between 2 and 160),
  email text not null check (char_length(email) between 5 and 254),
  phone text not null check (char_length(phone) between 7 and 40),
  topic text not null check (char_length(topic) between 2 and 80),
  message text not null check (char_length(message) between 10 and 4000),
  status text not null default 'new' check (status in ('new', 'contacted', 'closed'))
);

alter table public.contact_requests enable row level security;

grant insert on table public.contact_requests to anon, authenticated;

grant select, update, delete on table public.contact_requests to authenticated;

create policy "Anyone can submit a contact request"
  on public.contact_requests
  for insert
  to anon, authenticated
  with check (true);

create policy "Authenticated users can review contact requests"
  on public.contact_requests
  for select
  to authenticated
  using (true);

create policy "Authenticated users can update contact requests"
  on public.contact_requests
  for update
  to authenticated
  using (true)
  with check (true);

create policy "Authenticated users can delete contact requests"
  on public.contact_requests
  for delete
  to authenticated
  using (true);
