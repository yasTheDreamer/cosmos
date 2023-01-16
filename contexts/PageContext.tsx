import React, { createContext, useState } from "react";

export const PageContext = createContext({
  page: "right",
  setPage: (page: string) => {},
});

export const PageProvider = (props: any) => {
  const [page, setPage] = useState<string>("left");

  return (
    <PageContext.Provider value={{ page, setPage }}>
      {props.children}
    </PageContext.Provider>
  );
};
