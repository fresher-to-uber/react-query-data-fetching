import { useQuery } from "@tanstack/react-query";
import { fetchPokemons, fetchPokemonsFromGraphql } from "./api";
import PokemonCard from "./pokemon-card";
import { LoaderCircle } from "lucide-react";

function usePokemons(search: string) {
  return useQuery({
    queryKey: ['pokemons', search],
    queryFn: () => fetchPokemonsFromGraphql(search),
    enabled: !!search
  })
}

function PokemonList({
  search,
  filterTypes
}: { 
  search: string,
  filterTypes: string[]
}) {
  const { data, status, isLoading } = usePokemons(search);

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
      </div>
    )
  }

  if (status === "error") {
    return (
      <div className="flex justify-center">
        Error
      </div>
    )
  }

  if (status === "success") {
    return (
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filterTypes.length > 0 ? data.filter(p => p.types?.some(t => filterTypes.includes(t))).map((pokemon) => {
          return (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          )
        }) : data.map((pokemon) => {
          return (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          )
        })}
      </div>
    )
  }

  return (
    <div>
      No Pokemons founded!
    </div>
  )
}

export default PokemonList;
