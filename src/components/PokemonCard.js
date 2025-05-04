const PokemonCard = ({ pokemon }) => (
    <div className="card shadow-sm pokemon-card h-100">
      <div className="card-body text-center">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="img-fluid mb-2"
          style={{ height: '100px' }}
        />
        <h5 className="card-title text-capitalize">{pokemon.name}</h5> {/* This is the title */}
        <p className="card-text">ID: #{pokemon.id}</p>
        <div>
          {pokemon.types.map(t => (
            <span
              key={t.type.name}
              className={`badge bg-secondary me-1 text-capitalize`}
            >
              {t.type.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
  
  export default PokemonCard;
  
  