import { useState } from "react";

interface Pokemon {
  name: string;
  weight: number;
  height: number;
  sprites: {
    front_default: string;
  };
}

function App() {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [name, setName] = useState("");

  const fetchPokemon = async () => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
    );

    const data = await response.json();
    setPokemon(data);
  };

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>PokePWA 🔥</h1>

      <input
        type="text"
        placeholder="Ej. pikachu"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={fetchPokemon}>Buscar</button>

      {pokemon && (
        <div>
          <h2>{pokemon.name.toUpperCase()}</h2>
          <img src={pokemon.sprites.front_default} />
          <p>Peso: {pokemon.weight}</p>
          <p>Altura: {pokemon.height}</p>
        </div>
      )}
    </div>
  );
}

export default App;
