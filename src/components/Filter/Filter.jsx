import css from './Filter.module.css';

const Filter = ({ filtered, setFiltered }) => {
  const handleFilterChange = e => {
    setFiltered(e.target.value);
  };

  return (
    <div className={css.container}>
      <select
        className={css.select}
        value={filtered}
        onChange={handleFilterChange}
      >
        <option value={'show all'}>show all</option>
        <option value={'follow'}>follow</option>
        <option value={'following'}>following</option>
      </select>
    </div>
  );
};

export default Filter;
