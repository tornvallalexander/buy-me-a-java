import * as React from "react";
import {Heading} from "@chakra-ui/react";
import LoginForm from "./LoginForm";

const LoginModule = () => {
  return (
    <>
      <Heading as="h1" textAlign="center" mt="4rem" mb="2rem">
        Log in to BuyMeAJava
      </Heading>
      <LoginForm />
    </>
  )
}

export default LoginModule;