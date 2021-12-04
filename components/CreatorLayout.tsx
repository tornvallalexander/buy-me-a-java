import * as React from "react";
import CreatorHeader from "../modules/CreatorHeader";

interface UserLayoutProps {
  children: React.ReactNode;
}

const CreatorLayout = ({ children }: UserLayoutProps) => {
  return (
    <>
      <CreatorHeader />
      {children}
    </>
  );
};

export default CreatorLayout;
