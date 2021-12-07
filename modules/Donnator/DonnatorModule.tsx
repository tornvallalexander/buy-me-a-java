import * as React from "react";
import ProfileScreen from "../ProfileScreen";
import Layout from "../../components/Layout";

const SupporterModule = () => {
  return (
    <Layout userType="donator">
      <ProfileScreen />
    </Layout>
  );
};

export default SupporterModule;
