import React, { useContext } from "react";

const ToDoTabsContext = React.createContext(null);

export const useCommonProps = () => useContext(ToDoTabsContext);

export const CommonPropsProvider = ({ children, commonProps }) => (
  <ToDoTabsContext.Provider value={commonProps}>
    {children}
  </ToDoTabsContext.Provider>
);
