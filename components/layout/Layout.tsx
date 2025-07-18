import { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return <div className="w-screen container mx-auto">{children}</div>;
};