import { NextPage } from "next";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

export interface exportedValue {
  sidebarState: boolean;
  toggleSidebar: (toggleType?: boolean) => any;
}

const initialState = {
  sidebarState: false || true,
  toggleSidebar: () => {},
};

export const SidebarContext = createContext<exportedValue>(initialState);

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [sidebarState, setSidebarState] = useState<boolean>(false);
  const {pathname} = useRouter()

  

  const toggleSidebar = (toggleType?: boolean) => {
    if (typeof toggleType === "boolean") {
      setSidebarState(toggleType);
      return;
    }
    setSidebarState(!sidebarState);
  };
  
  const value: exportedValue = {
    sidebarState,
    toggleSidebar,
  };

  return (
    <>
      <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
    </>
  );
};

//export useSidebar
export function useSidebar() {
  return useContext(SidebarContext);
}
