import styles from './Search.module.css';

// Search component interface
export interface ISearch {
  placeHolder: string;
  searchText: string;
  handleSearch: Function;
  setSearchText: Function;
}

export const Search: React.FC<ISearch> = ({
  placeHolder,
  searchText,
  handleSearch,
  setSearchText,
}) => {
  // Update search text
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  // User hits 'Enter' Handler
  const handleUserInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <input
      className={styles.search__input}
      value={searchText}
      placeholder={placeHolder}
      onChange={(e) => handleChange(e)}
      onKeyUp={(e) => handleUserInput(e)}
      type="search"
    />
  );
};
