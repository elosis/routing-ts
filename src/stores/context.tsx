import { createContext, useContext, useState } from "react";

const ShopContext = createContext();

function ShopLayer(props: React.PropsWithChildren<{}>) {
  return (
    <ShopContext.Provider value={data}>{props.children} </ShopContext.Provider>
  );
}

export { useContext, ShopContext, ShopLayer };
