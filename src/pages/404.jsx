import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for might have been removed or is temporarily unavailable.</p>
      <Link to="/">Go to Home Page</Link>
    </div>
  );
};

export default NotFoundPage;
