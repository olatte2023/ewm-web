// d:/NBC/Project/ewm/ewm-web/context/layout-provider.tsx
"use client";

import { createContext, useContext } from "react";

type LayoutContextType = {
  collapsible: "offcanvas" | "icon" | "none";
  variant?: "sidebar" | "floating" | "inset";
};

const LayoutContext = createContext<LayoutContextType>({
  collapsible: "icon",
  variant: "sidebar",
});

export const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  // Default values compatible with `Sidebar` props
  const value: LayoutContextType = { collapsible: "icon", variant: "sidebar" };
  return (
    <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
  );
};

export const useLayout = () => useContext(LayoutContext);
