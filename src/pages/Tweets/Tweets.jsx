import { Link, useLocation } from 'react-router-dom';
import css from './Tweets.module.css';
const Tweets = ({ tweets }) => {
  const location = useLocation();

  return (
    <div className={css.container}>
      <div>
        <Link
          to="/"
          state={{ length: location?.state?.length }}
          className={css.link}
        >
          <span>Go Back</span>
        </Link>
      </div>
      <div className={css.wrapper}>
        <p className={css.name}>{location.state.user}</p>
        <div className={css.wrapperText}>
          <p className={css.text}>{location.state.tweets}</p>
          <p className={css.text}>{tweets} Tweets</p>
        </div>
      </div>
    </div>
  );
};

export default Tweets;
