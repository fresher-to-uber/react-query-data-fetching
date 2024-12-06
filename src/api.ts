export type PokemonInfo = {
  id: number;
  name: string;
  image: string;
  types: string[];
};

export type PokemonDetail = PokemonInfo & {
  abilities: string[];
  stats: PokemonStat[];
}

export type PokemonStat = {
  name: string;
  value: number;
};

export const POKEMON_ARTWORK_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

export async function fetchPokemons(search: string): Promise<PokemonInfo[]> {
  const pokemons = await fetch("https://pokeapi.co/api/v2/pokemon-species?limit=10000");
  const json = await pokemons.json();
  let results: { name: string, url: string }[] = json.results;

  if (search) {
    results = results
      .filter(({ name }: { name: string }) => name.includes(search))
  }

  return await Promise.all(
    results.map(async ({ name, url }: { name: string, url: string }) => {
      const backupId = url.split('/').filter(Boolean).pop();
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const pokemon = await res.json();
      return {
        id: pokemon.id || backupId,
        name: pokemon.name || name,
        image: pokemon.sprites?.other?.["official-artwork"]?.front_default || pokemon.sprites.front_default,
        types: pokemon.types?.map(({ type: { name } }: { type: { name: string } }) => name),
      }
    })
  );
}

export const GRAPHQL_BASE_URL = "https://graphql-pokeapi.graphcdn.app/";

const gqlQuery = `query pokemon($name: String!) {
  pokemon(name: $name) {
    id
    name
    types {
      type {
        name
      }
    }
  }
}`;

export async function fetchPokemonsFromGraphql(search: string): Promise<PokemonInfo[]> {
  const pokemons = await fetch("https://pokeapi.co/api/v2/pokemon-species?limit=10000");
  const json = await pokemons.json();
  let results: { name: string, url: string }[] = json.results;

  if (search) {
    results = results
      .filter(({ name }: { name: string }) => name.includes(search))
  }

  return await Promise.all(
    results.map(async ({ name, url }: { name: string, url: string }) => {
      const backupId = url.split('/').filter(Boolean).pop();
      const res = await fetch(GRAPHQL_BASE_URL, {
        credentials: 'omit',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: gqlQuery,
          variables: { name },
        }),
        method: 'POST',
      });
      const { data: { pokemon } } = await res.json();
      return {
        id: pokemon.id || backupId,
        name: pokemon.name || name,
        image: `${POKEMON_ARTWORK_URL}${pokemon.id || backupId}.png`,
        types: pokemon.types?.map(({ type: { name } }: { type: { name: string } }) => name),
      }
    })
  );
}

export async function getPokemon(id: number): Promise<PokemonDetail> {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemon = await res.json()
  return {
    id: pokemon.id,
    name: pokemon.name,
    image: pokemon.sprites?.other?.["official-artwork"]?.front_default || pokemon.sprites.front_default,
    types: pokemon.types?.map(({ type: { name } }: { type: { name: string } }) => name),
    abilities: pokemon.abilities?.map(({ ability: { name }}: { ability: { name: string }}) => name),
    stats: pokemon.stats?.map(({ base_stat, stat: { name } }: { base_stat: number, stat: { name: string }}) => ({
      name,
      value: base_stat
    }))
  }
}


export async function getPokemonTypes(): Promise<string[]> {
  const res = await fetch("https://pokeapi.co/api/v2/type?limit=50");
  const types = await res.json()
  return types.results?.map(({ name }: { name: string }) => name)
}
