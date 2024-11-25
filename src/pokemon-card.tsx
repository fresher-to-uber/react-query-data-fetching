import { PokemonInfo } from "./api"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card"
import { Badge, badgeVariants } from "./components/ui/badge"
import PokemonDetail from "./pokemon-detail"
import { useState } from "react"
import { Button } from "./components/ui/button"
import clsx from "clsx"

export default function PokemonCard({
  pokemon
}: {
  pokemon: PokemonInfo 
}) {
  const [isViewDetail, setIsViewDetail] = useState(false);

  const handleViewDetail = () => {
    setIsViewDetail((prev) => !prev);
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader className="items-start">
        <CardTitle className="text-xl mb-2">{pokemon.name}</CardTitle>
        <CardDescription className="flex gap-2">
          {pokemon.types?.map(type => {
            return (
              <Badge variant={type as NonNullable<
                Parameters<typeof badgeVariants>[0]
              >['variant']} key={type}>{type}</Badge>
            )
          })}
        </CardDescription>
      </CardHeader>
      <CardContent className="relative w-full max-h-80">
        <div className="overflow-hidden">
          <div className={clsx("flex flex-col transition-transform duration-300",
            {
              "-translate-y-80": isViewDetail
            }
          )}>
            <div className="min-w-0 basic-full grow-0 shrink-0 h-80 mx-auto">
              <img className="object-contain max-h-80" src={pokemon.image} />
            </div>
            <div className="min-w-0 basic-full grow-0 shrink-0 max-h-[248px] overscroll-contain overflow-auto scrollbar">
              <PokemonDetail id={pokemon.id} />
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 right-1/2 translate-x-1/2">
          <Button variant="ghost" onClick={handleViewDetail}>{isViewDetail ? "Close" : "Details"}</Button>
        </div>
      </CardContent>
    </Card>
  )
}
