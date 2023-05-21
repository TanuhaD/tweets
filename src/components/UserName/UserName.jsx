import css from './UserName.module.css';
const UserName = ({ user }) => {
  return (
    <div>
      <p className={css.text}>{user}</p>
    </div>
  );
};

export default UserName;
