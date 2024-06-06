import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.heading}>404 - Page Not Found</h1>
        <p style={styles.paragraph}>
          Oops! The page you are looking for might have been removed or is temporarily unavailable.
        </p>
        <Link to="/" style={styles.link}>Go to Home Page</Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f8f9fa',
  },
  content: {
    textAlign: 'center',
    animation: 'bounce 1s infinite', // Add animation
  },
  heading: {
    fontSize: '48px',
    marginBottom: '20px',
    color: '#343a40',
  },
  paragraph: {
    fontSize: '18px',
    marginBottom: '30px',
    color: '#6c757d',
  },
  link: {
    fontSize: '16px',
    color: '#007bff',
    textDecoration: 'none',
  },
  '@keyframes bounce': { // Define animation keyframes
    '0%, 100%': {
      transform: 'translateY(0)',
    },
    '50%': {
      transform: 'translateY(-10px)',
    },
  },
};

export default NotFoundPage;
