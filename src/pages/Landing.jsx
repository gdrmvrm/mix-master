import axios from 'axios';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CocktailList from '../components/CocktailList';
import SearchForm from '../components/SearchForm';
import { useQuery } from '@tanstack/react-query';

const cocktailSearchUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const searchCocktailQuery = (searchTerm) => {
  return {
    queryKey: ['search', searchTerm || 'all'],
    queryFn: async () => {
      searchTerm = searchTerm || 'a';

      const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
      return response.data.drinks;
    }
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);

    const searchTerm = url.searchParams.get('search') || '';

    await queryClient.ensureQueryData(searchCocktailQuery(searchTerm));
    return { searchTerm };

    // Use different endpoint based on whether there's a search term
    // let apiUrl;
    // if (searchTerm) {
    //   // Search by name
    //   apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`;
    // } else {
    //   // When empty, search by first letter 'a' to get some results
    //   apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`;
    // }

    // const response = await axios.get(apiUrl);
  };

const Landing = () => {
  const { searchTerm } = useLoaderData();
  const { data: drinks } = useQuery(searchCocktailQuery(searchTerm));

  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </>
  );
};

export default Landing;
