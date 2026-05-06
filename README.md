# Tiles Gallery

Tiles Gallery is a modern Next.js application for browsing and managing tile collections. It features authentication, search, gallery browsing, tile detail pages, and support for user profile images with a fallback avatar.

## Key Features

- Authentication with email/password and social login integration
- User profile display with optional remote photo support
- Tile gallery with search and individual tile detail pages
- `react-hot-toast` notifications for login and registration feedback
- External image handling configured via `next.config.mjs`
- Simple JSON server backend for demo tile data

## Getting Started

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Run the demo JSON server

```bash
npm run server
```

The tile data is pulled from `https://json-server-data-0n0i.onrender.com/tiles` in the current app configuration.



## Scripts

- `npm run dev` — Start the Next.js development server
- `npm run build` — Build the project for production
- `npm run start` — Start the production server
- `npm run lint` — Run ESLint
- `npm run server` — Start the local JSON server

## Project Structure

- `src/app` — Next.js application routes and pages
- `src/components` — Shared UI components
- `src/lib` — Auth helper code and client setup
- `public` — Static assets and fallback avatar image

## Notes

- The navbar displays the user name and profile photo when available, otherwise it falls back to `public/avatar.png`.
- Remote images are allowed via the `next.config.mjs` image remote patterns.
- Auth routes are handled by `better-auth` with MongoDB as the adapter.
