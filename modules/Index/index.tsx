import { NextPage } from "next";
import {
  Box,
  Button,
  chakra,
  Flex,
  GridItem,
  Icon,
  Input,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { HOME } from "../../constants/routes";
import { getCookie } from "cookies-next";

interface FeatureProps {
  children: React.ReactNode;
}

const IndexModule: NextPage = () => {
  const [userToken, setUserToken] = useState(getCookie("TOKEN"));

  useEffect(() => {
    // if (userToken) {
    //   window.location.href = HOME;
    // }
  }, []);

  const Feature = ({ children }: FeatureProps) => (
    <Flex alignItems="center" color="inherit">
      <Icon
        boxSize={4}
        mr={1}
        color="green.600"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </Icon>
      {children}
    </Flex>
  );

  return (
    <Box px={4} py={32} mx="auto">
      <Box
        w={{ base: "full", md: 11 / 12, xl: 8 / 12 }}
        textAlign={{ base: "left", md: "center" }}
        mx="auto"
      >
        <chakra.h1
          mb={3}
          fontSize={{ base: "4xl", md: "5xl" }}
          fontWeight={{ base: "bold", md: "extrabold" }}
          color="gray.900"
          lineHeight="shorter"
        >
          A secure, faster way to accept donations.
        </chakra.h1>
        <chakra.p
          mb={6}
          fontSize={{ base: "lg", md: "xl" }}
          color="gray.500"
          lineHeight="base"
        >
          We’re on a mission to bring transparency to donations. We make it
          easier than ever before for down right awesome people like you (yes,
          you!) to accept donations.
        </chakra.p>
        <SimpleGrid
          as="form"
          w={{ base: "full", md: 7 / 12 }}
          columns={{ base: 1, lg: 6 }}
          spacing={3}
          pt={1}
          mx="auto"
          mb={8}
        >
          <GridItem as="label" colSpan={{ base: "auto", lg: 4 }}>
            {/*<VisuallyHidden>Your Email</VisuallyHidden>*/}
            <Input
              mt={0}
              size="lg"
              type="email"
              placeholder="Enter your email..."
              required
              borderColor="gray"
              border="2px solid"
            />
          </GridItem>
          <Button
            as={GridItem}
            w="full"
            variant="solid"
            colSpan={{ base: "auto", lg: 2 }}
            size="lg"
            type="submit"
            colorScheme="blue"
            cursor="pointer"
          >
            Get Started
          </Button>
        </SimpleGrid>
        <Stack
          display="flex"
          direction={{ base: "column", md: "row" }}
          justifyContent={{ base: "start", md: "center" }}
          mb={3}
          spacing={{ base: 2, md: 8 }}
          fontSize="xs"
          color="gray.600"
        >
          <Feature>Free to use</Feature>
          <Feature>Easy set up</Feature>
          <Feature>Accept donations like never before</Feature>
        </Stack>
      </Box>
    </Box>
  );
};

export default IndexModule;
