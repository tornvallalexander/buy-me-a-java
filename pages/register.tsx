import * as React from "react";
import Layout from "../components/Layout";
import SignUpModule from "../modules/SignUp";

const Register = () => {
  return (
    <Layout userType="none">
      <SignUpModule />
    </Layout>
  );
};

export default Register;
