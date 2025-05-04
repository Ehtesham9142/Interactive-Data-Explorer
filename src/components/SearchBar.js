const SearchBar = ({ value, onChange }) => (
    <input
      type="text"
      className="form-control search-bar"
      placeholder="Search Pokémon by name..."
      value={value}
      onChange={onChange}
    />
  );
  
  export default SearchBar;
  