import { useQuery } from "@tanstack/react-query"
import { getPokemonTypes } from "./api"
import { LoaderCircle } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "./components/ui/toggle-group";
import { cn } from "./lib/utils";
import { badgeVariants } from "./components/ui/badge";

function usePokemonTypes() {
  return useQuery({
    queryKey: ["pokemon-types"],
    queryFn: () => getPokemonTypes()
  })
}

export default function TypeFilter({
  selectedTypes = [],
  onFilterChange
}: {
  selectedTypes: string[],
  onFilterChange: (values: string[]) => void
}) {
  const { data, status, isLoading } = usePokemonTypes();

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
    <>
      <div>
        Filters:
      </div>
      <div className="flex gap-2">
      <ToggleGroup type="multiple" className="flex flex-wrap gap-3" value={selectedTypes} onValueChange={onFilterChange} >
        {data?.map(name => {
            return (
              <ToggleGroupItem key={name} value={name} className={cn(
                badgeVariants({
                  variant: name as NonNullable<Parameters<typeof badgeVariants>[0]>['variant']
                }),
                "w-16"
              )}>{name}</ToggleGroupItem>
            )
          })
        }
      </ToggleGroup>
      </div>
    </>
  )
}
