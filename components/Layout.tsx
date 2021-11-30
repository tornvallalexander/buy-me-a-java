import * as React from "react";
import Header from "../modules/Header";

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Layout