import React from "react";
import { Box, Button, Img, Text } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      width="100%"
      height={50}
      justifyContent="center"
      alignItems="center"
    >
      <Box
        display="flex"
        flexDirection="row"
        width="60%"
        height={40}
        justifyContent="space-around"
        alignItems="center"
        borderBottom="3px solid #bfbfbf"
      >
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center"
        >
          <Img
            src="https://icons.veryicon.com/png/o/food--drinks/delicacy-series/coffee-cup-16.png"
            width={100}
            height={100}
            marginRight={5}
          />

          <Text
            _hover={{ backgroundColor: "#bfbfbf" }}
            cursor="pointer"
            padding={3}
            borderRadius={20}
            fontWeight="bold"
          >
            Explore creators
          </Text>

          <Text
            _hover={{ backgroundColor: "#bfbfbf" }}
            cursor="pointer"
            padding={3}
            borderRadius={20}
            fontWeight="bold"
          >
            About
          </Text>
        </Box>

        <Box>
          <Button backgroundColor="#f7bb83" marginRight={3}>
            Log in
          </Button>
          <Button backgroundColor="#f7bb83">Sign up</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
