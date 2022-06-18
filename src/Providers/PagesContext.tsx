import React, { useContext, createContext, useState } from "react";

enum Pages {
  HOME = "HOME",
  CATEGORIES = "CATEGORIES",
  ASSISTENCE = "ASSISTENCE",
  PROFILE = "PROFILE",
}

interface PagesContextData {
  Pages: typeof Pages;
  changePage: (page: Pages) => void;
  currentPage: Pages;
}

export const PagesContext = createContext<PagesContextData>(
  {} as PagesContextData
);

export const PagesProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [currentPage, setCurrentPage] = useState<Pages>(Pages.HOME);
  console.log(currentPage);

  function changePage(page: Pages) {
    setCurrentPage(page);
  }

  return (
    <PagesContext.Provider value={{ changePage, currentPage, Pages }}>
      {children}
    </PagesContext.Provider>
  );
};

export function usePages(): PagesContextData {
  const context: PagesContextData = useContext(PagesContext);

  if (!context) {
    throw new Error("usePages must be used within an PagesProvider");
  }

  return context;
}
