import { ISearch } from './Search';

function handleSearch() {
  alert('handleSearch');
}
function setSearchText() {
  alert('setSearchText');
}

const base: ISearch = {
  placeHolder: 'Enter pokemon name',
  searchText: '',
  handleSearch: handleSearch,
  setSearchText: setSearchText,
};

export const mockSearchProps = {
  base,
};
