import * as React from "react";
import ProfileScreen from "../ProfileScreen";
import Layout from "../../components/Layout";

const CreatorModule = () => {
  return (
    <Layout userType="creator">
      <ProfileScreen />
    </Layout>
  );
};

export default CreatorModule;
