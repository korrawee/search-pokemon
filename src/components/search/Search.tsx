import { FormEvent, useState } from 'react';
import styles from './Search.module.css';

export interface ISearch {
  placeHolder: string;
}

const Search: React.FC<ISearch> = ({ placeHolder }) => {
  const [val, setVal] = useState('');
  const [tmp, setTmp] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value);
  };
  const handleInputSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setTmp(val);
    e.preventDefault();
  };

  return (
    <>
      <h1>{val}</h1>
      <form onSubmit={e => handleInputSubmit(e)}>
        <input
          className={styles.search__input}
          value={val}
          placeholder={placeHolder}
          onChange={(e) => handleInputChange(e)}
          type="search"
        />
      </form>
      <h1>{tmp}</h1>
    </>
  );
};

export default Search;
