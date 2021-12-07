import * as React from "react";
import DonationScreen from "../modules/Donnator/DonationScreen";
import Layout from "../components/Layout";

const DonatorCreators = () => {
  return (
    <Layout userType="donator">
      <DonationScreen />
    </Layout>
  );
};

export default DonatorCreators;
