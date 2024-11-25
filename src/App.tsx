import { useEffect, useState } from 'react'
import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import PokemonList from './pokemon-list'
import { Input } from "@/components/ui/input"
import TypeFilter from './type-filter'

const queryClient = new QueryClient()

function useDebounce(value: string, delay: number) {
  const [ debounced, setDebounced ] = useState(value);
  
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounced(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    }
  }, [value, delay]);

  return debounced;
}

function App() {
  const [ search, setSearch ] = useState('');
  const [ selectedTypes, setSelectedTypes ] = useState<string[]>([]);
  const debouncedSearch = useDebounce(search, 500);
  
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <div className="container flex flex-col gap-4 mx-auto">
        <Input type="text" placeholder="Search pokemon" value={search} onChange={(e) => setSearch(e.target.value)} />
        <TypeFilter selectedTypes={selectedTypes} onFilterChange={setSelectedTypes} />
        <PokemonList search={debouncedSearch} filterTypes={selectedTypes} />
      </div>
    </QueryClientProvider>
  )
}

export default App
