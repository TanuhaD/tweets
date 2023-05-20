import React from 'react';
import css from './Followers.module.css';
const Followers = ({ followersCount }) => {
  const formatFollowersCount = followers => {
    const arr = followers.toString().split('').reverse();
    const res = [];
    for (let i = 0; i < arr.length; i++) {
      res.push(arr[i]);
      if ((i + 1) % 3 === 0) {
        if (arr[i + 1]) {
          res.push(', ');
        }
      }
    }
    return res.reverse().join('');
  };
  return (
    <div className={css.wrapper}>
      <p className={css.text}>
        {formatFollowersCount(followersCount)} Followers
      </p>
    </div>
  );
};

export default Followers;
