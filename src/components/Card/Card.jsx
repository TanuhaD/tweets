import React, { useState } from 'react';
import css from './Card.module.css';
import picture from '../../assets/img/Card/picture1.png';
import Logo from '../Logo/Logo';
import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';
import Followers from '../Followers/Followers';

import { Link } from 'react-router-dom';
import UserName from '../UserName/UserName';

const Card = ({ user, length }) => {
  const [subscription, setSubscription] = useState(user.subscription);

  const changeSubscriptionStatus = () => {
    setSubscription(!subscription);

    const subscriptionList =
      JSON.parse(localStorage.getItem('subscriptionList')) || [];

    let newSubscriptionList;

    if (subscription) {
      newSubscriptionList = subscriptionList.filter(id => id !== user.id);
    } else {
      newSubscriptionList = [...subscriptionList, user.id];
    }

    localStorage.setItem(
      'subscriptionList',
      JSON.stringify(newSubscriptionList)
    );
  };

  return (
    <div className={css.container}>
      <Logo className={css.logo} />
      <img src={picture} alt="" className={css.picture} />
      <Avatar avatar={user.avatar} />
      <UserName user={user.user} />
      <Link
        to="/tweets"
        state={{ tweets: user.tweets, user: user.user, length }}
        className={css.link}
      >
        {user.tweets} Tweets
      </Link>
      <Followers followersCount={user.followers + subscription ? 1 : 0} />
      <Button
        subscription={subscription}
        setSubscription={changeSubscriptionStatus}
      />
    </div>
  );
};

export default Card;
