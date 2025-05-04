const types = ["", "fire", "water", "grass", "electric", "bug", "normal", "poison", "ground", "fairy", "fighting", "psychic", "rock", "ghost", "ice", "dragon", "dark", "steel", "flying"];

const FilterDropdown = ({ onChange }) => (
  <select className="form-select" onChange={onChange}>
    <option value="">All Types</option>
    {types.map(type => (
      <option key={type} value={type}>
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </option>
    ))}
  </select>
);

export default FilterDropdown;
