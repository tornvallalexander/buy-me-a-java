import * as React from "react";
import type { NextPage } from "next";
import Layout from "../components/Layout";
import IndexModule from "../modules/Index";

const Index: NextPage = () => {
  return (
    <Layout>
      <IndexModule />
    </Layout>
  );
};

export default Index;
