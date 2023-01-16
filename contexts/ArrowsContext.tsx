import React, { createContext, useState } from "react";

export const ArrowsContext = createContext({
  arrowHidden: false,
  setArrowHidden: (arrows: boolean) => {},
});

export const ArrowsProvider = (props: any) => {
  const [arrowHidden, setArrowHidden] = useState<boolean>(false);
  return (
    <ArrowsContext.Provider value={{ arrowHidden, setArrowHidden }}>
      {props.children}
    </ArrowsContext.Provider>
  );
};
