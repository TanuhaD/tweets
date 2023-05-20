import React from 'react';
import css from './Button.module.css';
const Button = ({ subscription, setSubscription }) => {
  const handleBtnClick = () => {
    setSubscription();
  };
  return (
    <div>
      <button
        onClick={handleBtnClick}
        className={css.btn}
        style={{ backgroundColor: !subscription ? '#ebd8ff' : '#5CD3A8' }}
      >
        {subscription ? 'Following' : 'Follow'}
      </button>
    </div>
  );
};

export default Button;
