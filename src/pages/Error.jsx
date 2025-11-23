import React from 'react';
import Wrapper from '../assets/wrappers/ErrorPage';
import { Link, useRouteError } from 'react-router-dom';
import img from '../assets/not-found.svg';

const Error = () => {
  const error = useRouteError();

  return (
    <Wrapper>
      {error.status === 404 ? (
        <div>
          <img src={img} alt="not found" />
          <h3>Ohh!</h3>
          <p>We can't seem to find the page you're looking for</p>
          <Link to="/">back home</Link>
        </div>
      ) : (
        <Wrapper>
          <div>
            <h3>something went wrong</h3>
          </div>
        </Wrapper>
      )}
    </Wrapper>
  );
};

export default Error;
