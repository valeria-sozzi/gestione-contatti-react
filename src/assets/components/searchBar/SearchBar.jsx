const SearchBar = ({ searchName, setSearchName }) => {
  return (
    <>
      <label>Cerca per Nome: </label>
      <input
        type="text"
        value={searchName}
        onChange={(e) => setSearchName(e.target.value)}
        required
      />
    </>
  );
};

export default SearchBar;
