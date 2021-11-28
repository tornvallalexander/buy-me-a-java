import * as React from "react";
import { chakra } from "@chakra-ui/react"
import SignUpForm from "./SignUpForm";

const SignUpModule = () => {
  return (
    <>
      <chakra.h1>
        Sign up for BuyMeAJava
      </chakra.h1>
      <SignUpForm />
    </>
  )
}

export default SignUpModule;