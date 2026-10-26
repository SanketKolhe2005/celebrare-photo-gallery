# Celebrare Photo Gallery

A responsive Photo Gallery Web App built with React, Vite, and Tailwind CSS as part of the Celebrare Frontend Intern Pre-Screening Assignment.

## Features

- Fetches 30 photos from the Picsum Photos API.
- Displays photos in a responsive grid.
- Shows a loading spinner while fetching photos.
- Displays an error message if the API request fails.
- Supports real-time search by photo author.
- Allows users to add and remove favourite photos.
- Uses React `useReducer` to manage favourites.
- Persists favourite selections using `localStorage`.
- Uses a custom `useFetchPhotos` hook for API fetching.
- Uses `useCallback` and `useMemo` for search handling and filtering.

## Tech Stack

- React
- Vite
- Tailwind CSS
- JavaScript
- Picsum Photos API

## API

Photos are fetched from:

https://picsum.photos/v2/list?limit=30

## Getting Started

### Prerequisites

Install [Node.js](https://nodejs.org/).

### Installation

1. Clone the repository:

   ```bash
   git clone YOUR_GITHUB_REPOSITORY_URL
   ```

2. Navigate to the project directory:

   ```bash
   cd celebrare-photo-gallery
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in the terminal.

## Production Build

To create a production build, run:

```bash
npm run build
```

## Project Structure

```text
celebrare-photo-gallery/
├── public/
├── src/
│   ├── hooks/
│   │   └── useFetchPhotos.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── .gitignore
└── README.md
```

## Assignment Submission

**Role:** Frontend React Intern

**Company:** Celebrare

**Project:** Photo Gallery Web App

---

Developed as part of the Celebrare Frontend Intern Pre-Screening Assignment.
