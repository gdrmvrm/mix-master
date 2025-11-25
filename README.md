# MixMaster

MixMaster is a modern single-page application (SPA) that helps users discover and explore cocktail recipes. Built with React and powered by TheCocktailDB API, it provides an intuitive interface for searching drinks, viewing detailed recipes with ingredients and instructions, and staying updated through newsletter subscriptions.

## Live Demo

🔗 [View Live Site](cocktail-guides.netlify.app)

## Features

- **Smart Search**: Find cocktails by name with instant results
- **Detailed Recipes**: View complete drink information including ingredients, measurements, instructions, and glassware recommendations
- **Intelligent Caching**: React Query automatically caches search results and cocktail details for 5 minutes, reducing API calls and providing instant access to previously viewed content
- **Optimized Performance**: Loader functions pre-fetch data before navigation, ensuring smooth page transitions
- **Newsletter Signup**: Subscribe to receive new cocktail recipes and updates. Newsletter submissions with React Router actions
- **Responsive Design**: Fully responsive interface that works seamlessly across desktop, tablet, and mobile devices
- **Global Loading State**: Display loading indicators during navigation and data fetching
- **Error Boundaries**: Catch and display errors at both route and page level
- **Error Handling**: Graceful error pages for invalid routes and API failures

## How Caching Works

MixMaster uses **React Query (TanStack Query)** for intelligent data management:

- **5-Minute Cache**: Search results and individual cocktail details are cached for 5 minutes (`staleTime: 1000 * 60 * 5`)
- **Instant Repeat Searches**: If you search for "margarita" and then search again within 5 minutes, results load instantly from cache without making a new API request
- **Background Refresh**: After the 5-minute window, data is automatically revalidated in the background while showing cached content
- **Query Key Strategy**: Each search term and cocktail ID has a unique cache key, ensuring efficient data retrieval and preventing unnecessary network requests

This caching strategy provides a fast, responsive user experience while minimizing load on the API.

## Tech Stack

- React 18
- React Router 6 (client-side routing with loaders and actions patterns)
- React Query (TanStack Query) for data fetching and caching
- Axios for API requests
- Styled Components for styling
- React Toastify for user feedback notifications

## Getting Started

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

## Deployment

Deployed on Netlify with continuous deployment from the main branch.

## API

This project uses [TheCocktailDB API](https://www.thecocktaildb.com/) for cocktail data.

- Search cocktails by name
- Lookup full cocktail details by ID
- No API key required
