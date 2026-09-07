-- Security hardening: contact requests must not be readable or mutable by generic authenticated users.
-- The public website only needs INSERT; administrative review should use a controlled server-side/admin path.
revoke select, update, delete on table public.contact_requests from anon;
revoke select, update, delete on table public.contact_requests from authenticated;

drop policy if exists "Authenticated users can review contact requests" on public.contact_requests;
drop policy if exists "Authenticated users can update contact requests" on public.contact_requests;
drop policy if exists "Authenticated users can delete contact requests" on public.contact_requests;

-- Keep the existing insert policies for the public quotation form.
