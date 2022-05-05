/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState } from 'react';

export const ResultsContext = createContext({
  results: [],
  setResults: () => {},
});

export function ResultsContextProvider({ children }) {
  const [results, setResults] = useState([]);

  return (
    <ResultsContext.Provider value={{ results, setResults }}>
      {children}
    </ResultsContext.Provider>
  );
}
