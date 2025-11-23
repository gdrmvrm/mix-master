import React from 'react';
import { useRouteError } from 'react-router-dom';

const SingleErrorPage = () => {
  const error = useRouteError();

  return <h3>{error.message}</h3>;
};

export default SingleErrorPage;
