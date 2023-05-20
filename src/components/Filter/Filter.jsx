import React, { useState } from 'react';

const Filter = ({ filtered, setFiltered, users }) => {
  // const [filtered, setFiltered] = useState('');

  const handleFilterChange = e => {
    setFiltered(e.target.value);
  };

  // const filterUsers = user => {
  //   console.log('user', user);
  //   if (filtered === 'follow' && user.followers === 'follow') {
  //     return true;
  //   }
  //   if (filtered === 'following' && user.followers === 'following') {
  //     return true;
  //   }
  //   if (filtered === 'show all') {
  //     return true;
  //   }
  //   return false;
  // };

  // const filteredUsers = users.filter(filterUsers);
  // console.log('filterUsers', filterUsers());
  // console.log('filteredUsers', filteredUsers);

  return (
    <div>
      <div>
        <select value={filtered} onChange={handleFilterChange}>
          <option value={'show all'}>show all</option>
          <option value={'follow'}>follow</option>
          <option value={'following'}>following</option>
        </select>
      </div>
      <ul>
        {/* {filteredUsers.map(user => {
          <li key={user.id}>{user}</li>;
        })} */}
      </ul>
    </div>
  );
};

export default Filter;
