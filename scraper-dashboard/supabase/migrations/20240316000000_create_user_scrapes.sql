-- Create the user_scrapes table
create table public.user_scrapes (
    id uuid default gen_random_uuid() primary key,
    user_id uuid references auth.users(id) on delete cascade not null,
    domain text not null,
    scraped_data jsonb,
    scraped_at timestamp with time zone default timezone('utc'::text, now()) not null,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security (RLS)
alter table public.user_scrapes enable row level security;

-- Create policy to allow users to only see their own scrapes
create policy "Users can only view their own scrapes"
    on public.user_scrapes
    for select
    using (auth.uid() = user_id);

-- Create policy to allow users to insert their own scrapes
create policy "Users can insert their own scrapes"
    on public.user_scrapes
    for insert
    with check (auth.uid() = user_id);

-- Create policy to allow users to update their own scrapes
create policy "Users can update their own scrapes"
    on public.user_scrapes
    for update
    using (auth.uid() = user_id)
    with check (auth.uid() = user_id);

-- Create policy to allow users to delete their own scrapes
create policy "Users can delete their own scrapes"
    on public.user_scrapes
    for delete
    using (auth.uid() = user_id);

-- Create index for faster queries
create index user_scrapes_user_id_idx on public.user_scrapes(user_id);
create index user_scrapes_domain_idx on public.user_scrapes(domain);
create index user_scrapes_scraped_at_idx on public.user_scrapes(scraped_at); 