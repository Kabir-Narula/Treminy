# Treminy

Collaborative workspace app inspired by Notion — realtime document editing, team presence, subscriptions, and rich text.

Built as a full-stack learning project and extended with my own features on top of the base architecture.

## Features

- Realtime cursors and text selection
- Rich text editor with collaborative updates
- Workspaces, folders, and trash recovery
- Stripe subscription billing
- Supabase auth and row-level security
- Light / dark mode

## Stack

Next.js · TypeScript · Supabase · Drizzle ORM · Stripe · Tailwind · Radix UI · Socket collaboration layer

## Run locally

```bash
git clone https://github.com/Kabir-Narula/Treminy.git
cd Treminy
npm install
```

Configure `.env` with Supabase, Stripe, and database keys (see `.env.example` if present).

```bash
npm run dev
```

## Author

Kabir Narula — [GitHub](https://github.com/Kabir-Narula)
