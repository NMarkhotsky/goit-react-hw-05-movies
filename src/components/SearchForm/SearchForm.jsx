const SearchForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="search" />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
