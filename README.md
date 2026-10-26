# Celebrare Photo Gallery

A responsive Photo Gallery Web App built with React, Vite, and Tailwind CSS for the **Celebrare Frontend Intern Pre-Screening Assignment**.

## Features

- Fetches 30 photos from the Picsum Photos API.
- Displays photos in a responsive grid.
- Shows a loading spinner while fetching photos.
- Displays an error message if the API request fails.
- Supports real-time search by author name without reloading the page.
- Allows users to add and remove favourite photos using heart buttons.
- Manages favourite state using React `useReducer`.
- Saves favourite selections in `localStorage` to persist them after page refresh.
- Uses a custom `useFetchPhotos` hook to separate API logic from the UI.
- Uses `useCallback` for the search handler.
- Uses `useMemo` to calculate filtered photos.

## Tech Stack

- React
- Vite
- Tailwind CSS
- JavaScript
- HTML and CSS
- Picsum Photos API

## API Used

The application fetches photos from the following public API:

https://picsum.photos/v2/list?limit=30

## Project Structure

```text
celebrare-photo-gallery/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   ├── hooks/
│   │   └── useFetchPhotos.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## Getting Started

### Prerequisites

Install [Node.js](https://nodejs.org/) before running the application.

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/SanketKolhe2005/celebrare-photo-gallery.git
   ```

2. Navigate to the project folder:

   ```bash
   cd celebrare-photo-gallery
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in the terminal to view the application.

## Production Build

To check and build the application for production, run:

```bash
npm run build
```

## Responsive Design

The gallery is designed to display:

- **Desktop:** Four columns
- **Tablet:** Two columns
- **Mobile:** One column

## State Management and React Hooks

- **`useState`:** Manages the search input.
- **`useReducer`:** Manages adding and removing favourites.
- **`useEffect`:** Handles side effects in the custom photo-fetching hook.
- **`useCallback`:** Keeps the search handler function stable between renders.
- **`useMemo`:** Caches the filtered photo list until its dependencies change.
- **`localStorage`:** Persists favourite selections across browser refreshes.
- **`useFetchPhotos`:** Encapsulates photo fetching, loading state, and error handling.

## Assignment Information

- **Company:** Celebrare
- **Role:** Frontend React Intern
- **Project:** Photo Gallery Web App
- **Purpose:** Frontend internship pre-screening assignment

## Submission

The assignment submission includes:

- Public GitHub repository link
- Five-minute screen recording demonstrating the application and explaining the implementation
- A short description of the most challenging part of the assignment

---

Developed as part of the Celebrare Frontend Intern Pre-Screening Assignment.
