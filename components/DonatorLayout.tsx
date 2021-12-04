import * as React from "react";
import DonatorHeader from "../modules/DonatorHeader";

interface UserLayoutProps {
  children: React.ReactNode;
}

const CreatorLayout = ({ children }: UserLayoutProps) => {
  return (
    <>
      <DonatorHeader />
      {children}
    </>
  );
};

export default CreatorLayout;
