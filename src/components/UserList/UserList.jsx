import React, { useEffect, useRef, useState } from 'react';
import { getUsers } from '../../utils/userAPI/userAPI';
import Card from '../Card/Card';
import css from './UserList.module.css';
import Filter from '../Filter/Filter';
const UserList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [showLoadMoreBtn, setshowLoadMoreBtn] = useState(true);
  const [filtered, setFiltered] = useState('');

  const isFirstLoading = useRef(true);

  const filterUsers = user => {
    console.log('user', user);
    if (filtered === 'follow' && user === 'follow') {
      return true;
    }
    if (filtered === 'following' && user === 'following') {
      return true;
    }
    if (filtered === 'show all') {
      return true;
    }
    return false;
  };

  const filteredUsers = users.filter(filterUsers);
  console.log('filterUsers', filterUsers());
  console.log('filteredUsers', filteredUsers);

  const handleBtnPagination = () => {
    setPage(prevPage => {
      return prevPage + 1;
    });
  };

  const getUsersWithSubscription = users => {
    const subscriptionList =
      JSON.parse(localStorage.getItem('subscriptionList')) || [];
    return users.map(user => ({
      ...user,
      subscription: subscriptionList.includes(user.id),
    }));
  };

  useEffect(() => {
    if (isFirstLoading.current) {
      isFirstLoading.current = false;
      getUsers()
        .then(data => {
          setUsers(getUsersWithSubscription(data));
        })
        .catch(() => {});
    }
  }, []);

  useEffect(() => {
    if (!isFirstLoading.current && page > 1) {
      getUsers({ page })
        .then(data => {
          if (data.length === 0) {
            setshowLoadMoreBtn(false);
          } else {
            setUsers(prevUsers => {
              return [...prevUsers, ...getUsersWithSubscription(data)];
            });
          }
        })
        .catch(() => {});
    }
  }, [page]);
  return (
    <div className={css.container}>
      <Filter filtered={filtered} setFiltered={setFiltered} />
      <ul className={css.userList}>
        {users.map(user => (
          <li key={user.id} className={css.userItem}>
            <Card user={user} />
          </li>
        ))}
      </ul>
      <div>
        {showLoadMoreBtn && (
          <button onClick={handleBtnPagination}>Load more</button>
        )}
      </div>
    </div>
  );
};

export default UserList;