import { createContext, useContext, useState } from 'react';

// Define the type for your context data
type AppContextData = {
  myData: string;
  setMyData: (data: string) => void;
};

// Create the context
const AppContext = createContext<AppContextData | undefined>(undefined);

// Create a provider component
export function AppContextProvider({ children }: { children: React.ReactNode }) {
  const [myData, setMyData] = useState<string>('initialValue');

  return (
    <AppContext.Provider value={{ myData, setMyData }}>
      {children}
    </AppContext.Provider>
  );
}

// Create a custom hook to access the context
export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within a AppContextProvider');
  }
  return context;
}
