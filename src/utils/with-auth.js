import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const withAuth = (Component) => {
  const AuthenticatedComponent = (props) => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
      const isAuthenticated = localStorage.getItem('token') !== null;
      if (!isAuthenticated && location.pathname !== '/') {
        navigate('/');
      }
    }, [navigate, location.pathname]);

    return <Component {...props} />;
  };

  return AuthenticatedComponent;
};

export default withAuth;
