import { LoaderCircle } from "lucide-react";
import { getPokemon } from "./api"
import { useQuery } from "@tanstack/react-query"

function usePokemon(id: number) {
  return useQuery({
    queryKey: ["pokemon", id],
    queryFn: () => getPokemon(id)
  })
}

export default function PokemonDetail({
  id
}: {
  id: number
}) {
  const { data, status, isLoading } = usePokemon(id);

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
  
  return (
    <div className="flex flex-col gap-2 text-left">
      <div className="flex flex-col items-start">
        <div className="font-semibold">Abilities:</div>
        <div className="pl-2 text-sm text-muted-foreground">
        {data?.abilities.map((ability, index) => (
          <div key={index}>{ability}</div>
        ))}
        </div>
      </div>
      <div className="flex flex-col items-start">
        <div className="font-semibold">Stats:</div>
        <div className="flex flex-col pl-2 w-full text-sm text-muted-foreground">
          {data?.stats.map(stat => (
            <div key={stat.name} className="flex justify-between">
              <span>{stat.name}</span>
              <span className="font-semibold pr-2">{stat.value}</span>
              </div>
          ))}
        </div>
      </div>
    </div>
  )
}
