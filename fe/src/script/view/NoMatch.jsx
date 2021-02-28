import React from 'react';
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
  console.warn('Dashboard');

  const location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
};

export default Dashboard;
