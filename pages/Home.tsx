import { Box, Button, Input, Text } from "@chakra-ui/react";
import React from "react";
import Spacer from "../components/Spacer";
import "@vetixy/circular-std";
import Layout from "../components/Layout";

const HomeScreen = () => {
  return (
    <Layout>

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >

        <Spacer height={2} />

        <Text fontSize={35} fontFamily="CircularStd" fontWeight="600">
          The best way to accept donations.
        </Text>
        <Spacer height={1} />

        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          width="45%"
          height={70}
          border="0.5px solid #e8e8e8"
          borderRadius={50}
          backgroundColor="#fafafa"
        >
          <Box display="flex" flexDirection="row" marginLeft={5}>
            <Text fontSize={30} fontFamily="CircularStd" fontWeight="500">
              buymeajava.com/
            </Text>
            <Input
              placeholder="yourname"
              border="none"
              padding={0}
              width="25%"
              focusBorderColor="none"
              fontSize={23}
              fontFamily="CircularStd"
            />
          </Box>

          <Button
            width="45%"
            height={70}
            backgroundColor="#f7bb83"
            borderRadius={50}
            fontWeight="600"
            fontFamily="CircularStd"
            fontSize={23}
          >
            Start my page
          </Button>
        </Box>
        <Spacer height={1} />
      </Box>
    </Layout>
  );
};

export default HomeScreen;
