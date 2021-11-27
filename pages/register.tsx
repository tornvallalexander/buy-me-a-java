import React, { useState } from "react";
import { Box, Button, Img, Input, Text } from "@chakra-ui/react";
import Spacer from "../components/Spacer";
import "@vetixy/circular-std";
import axios from "axios";
import Layout from "../components/Layout";

const Register = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleRegister = (email: string, password: string) => {
    if (email && password) {
      axios
        .post("http://localhost:5000/api/v1/auth/signup", {
          password: email,
          email: email,
        })
        .then((res) => console.log(res.data));
    }
  };

  return (
    <Layout>
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
              Already have an account?
            </Text>

            <Text
              color="#222"
              fontWeight="600"
              paddingLeft={2}
              _hover={{ borderBottom: "3px solid #222", cursor: "pointer" }}
              onClick={() => {
                window.location.href = "/Login";
              }}
            >
              Log in
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
            Sign up
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
            onChange={(e) => {
              setEmail(e.target.value);
            }}
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
            onChange={(e) => {
              setPassword(e.target.value);
            }}
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
            onClick={() => {
              handleRegister(email, password);
            }}
          >
            Sign up
          </Button>
        </Box>
      </Box>
    </Layout>
  );
};

export default Register;
