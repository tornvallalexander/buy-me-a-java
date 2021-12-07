import * as React from "react";
import Header from "../modules/Header";

interface LayoutProps {
  children: React.ReactNode;
  userType: string;
}

const Layout = ({ children, userType }: LayoutProps) => {
  return (
    <>
      <Header type={userType} />
      {children}
    </>
  );
};

export default Layout;
