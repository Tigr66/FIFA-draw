# FIFA Draw

## About

FIFA Draw is a browser-based companion for choosing teams and organizing matches between two players. It provides a random-match mode that assigns each player a different team, a series mode for recording match scores and reviewing results, and a team browser grouped by country. Player names and the current series are saved in the browser so they can be used again later.

## Live Demo

[https://fifa-draw.vercel.app/](https://fifa-draw.vercel.app/)

## Tech Stack

- **React 19** — component-based user interface.
- **TypeScript** — application logic and typed game, team, and series data.
- **Vite** — development server and production build.
- **React Router** — client-side navigation between application pages.
- **Material UI** — interface components, theming, and icons.
- **Base UI** — accessible number field used for match scores.
- **Emotion** — styling engine used by Material UI.
- **React Compiler** — enabled through the Babel plugin in the Vite configuration.

## Architecture

- `src/pages/` contains the Home, RandomMatch, Series, SeriesResults, and Teams page modules. Page-specific components and hooks are colocated with their pages; reusable UI components are in `src/components/`.
- UI components render the interface, while page hooks coordinate navigation and page behavior. `useHomePage` handles player setup and mode selection; `useRandomMatch` connects the random-match page to the roulette; `useSeries` manages series workflows and match entry; and `useSeriesResults` calculates and prepares series statistics.
- Shared hooks in `src/hooks/` separate reusable logic: `useRoulette` handles team selection and spin phases, `usePlayersStorage` persists player names, and `useSeriesStorage` reads and writes series data.
- React state is used for transient UI and game state. `localStorage` stores player names and one active or completed series; there is no server-side persistence.
- `src/data/` holds the country and team catalog. `src/utils/` contains team-pair selection, team lookup, logo preloading, and win-percentage calculations. `src/types/` defines the TypeScript models used across these modules.
- `src/routes/app-routes.ts` centralizes page paths, and `src/theme/` and `src/styles/` provide the Material UI theme and global styles.

## Getting Started

### Requirements

- Node.js 20.19+ or 22.12+
- npm

### Setup

```bash
git clone https://github.com/Tigr66/FIFA-draw.git
cd FIFA-draw
npm ci
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

To serve the production build locally after building:

```bash
npm run preview
```

No environment variables are required.
