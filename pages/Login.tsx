import { Box, Button, Img, Input, Text } from "@chakra-ui/react";
import React from "react";
import Spacer from "../components/Spacer";
import "@vetixy/circular-std";

const LoginScreen = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      paddingLeft={50}
      paddingRight={50}
    >
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Img
          cursor="pointer"
          onClick={() => {
            window.location.href = "/";
          }}
          src="https://icons.veryicon.com/png/o/food--drinks/delicacy-series/coffee-cup-16.png"
          width={100}
          height={100}
          marginRight={5}
        />

        <Box display="flex" flexDirection="row">
          <Text color="#222" fontWeight="500">
            Don't have an account?
          </Text>

          <Text
            color="#222"
            fontWeight="600"
            paddingLeft={2}
            _hover={{ borderBottom: "3px solid #222", cursor: "pointer" }}
            onClick={() => {
              window.location.href = "/Signup";
            }}
          >
            Sign up
          </Text>
        </Box>
      </Box>
      <Spacer height={5} />

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width="100%"
      >
        <Text color="#222" fontSize={35} fontWeight="900">
          Welcome back!
        </Text>
        <Spacer height={1} />

        <Input
          placeholder="Email"
          type="email"
          width={400}
          height={50}
          border="1px solid"
          borderColor="gray"
          fontSize={23}
          fontFamily="CircularStd"
        />
        <Spacer height={0.5} />

        <Input
          placeholder="Password"
          type="password"
          width={400}
          height={50}
          border="1px solid"
          borderColor="gray"
          fontSize={23}
          fontFamily="CircularStd"
        />
        <Spacer height={1} />

        <Button
          width={400}
          height={70}
          backgroundColor="#f7bb83"
          borderRadius={50}
          fontWeight="600"
          fontFamily="CircularStd"
          fontSize={23}
        >
          Log in
        </Button>
      </Box>
    </Box>
  );
};

export default LoginScreen;
