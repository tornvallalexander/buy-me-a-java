import * as React from "react";
import { Heading } from "@chakra-ui/react"
import SignUpForm from "./SignUpForm";

const SignUpModule = () => {
  return (
    <>
      <Heading as="h1" textAlign="center" mt="4rem" mb="2rem">
        Sign up for BuyMeAJava
      </Heading>
      <SignUpForm />
    </>
  )
}

export default SignUpModule;