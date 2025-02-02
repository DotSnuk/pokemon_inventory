import { createContext, useContext, useState } from 'react';

const LoadedContext = createContext(null);

export default function PokemonLoadedProvider({ children }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <LoadedContext.Provider value={{ loaded, setLoaded }}>
      {children}
    </LoadedContext.Provider>
  );
}

export function useLoadedContext() {
  return useContext(LoadedContext);
}
