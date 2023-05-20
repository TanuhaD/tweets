import { Link } from 'react-router-dom';
import css from './Tweets.module.css';
const Tweets = ({ tweets }) => {
  return (
    <div className={css.wrapper}>
      <div>
        <Link to="/">
          <span>Go Back</span>
        </Link>
      </div>
      <p className={css.text}>{tweets} Tweets</p>
    </div>
  );
};

export default Tweets;
