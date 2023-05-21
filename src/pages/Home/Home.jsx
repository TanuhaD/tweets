import React from 'react';
import { useLocation } from 'react-router-dom';

import UserList from '../../components/UserList/UserList';

const Home = ({ user }) => {
  const location = useLocation();
  console.log('location', location?.state?.length);
  return (
    <div>
      <UserList user={user} length={location?.state?.length} />
    </div>
  );
};

export default Home;
