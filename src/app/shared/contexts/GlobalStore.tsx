import { createContext } from "react";
import { products } from "../local database/db";

export const GlobalStoreContext = createContext(products);

function GlobalStore({ children }: any) {
  return (
    <GlobalStoreContext.Provider value={products}>
      {children}
    </GlobalStoreContext.Provider>
  );
}

export default GlobalStore;
