import React from 'react';
import UserList from '../../components/UserList/UserList';

const Home = ({ user }) => {
  return (
    <div>
      <UserList user={user} />
    </div>
  );
};

export default Home;
