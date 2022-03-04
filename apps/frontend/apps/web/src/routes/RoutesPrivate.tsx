// Dependencies
import React from 'react';
import { Navigate } from 'react-router-dom';

interface IRouteProps {
  children: any;
}

const RoutesPrivate: React.FC<IRouteProps> = ({ children }) => {
  const token = true;
  // const token = localStorage.getItem('@token:workspace');

  return token ? children : <Navigate replace to="/home" />;
};

export default RoutesPrivate;
