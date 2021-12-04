import {
  chakra,
  Box,
  Image,
  Flex,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import Spacer from "../components/Spacer";

const ProfileScreen = () => {
  const [isMobile] = useMediaQuery("(max-width: 1000px)");

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Spacer height={3} />

      <Flex p={50} w="full" alignItems="center" justifyContent="center">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          width={isMobile ? "95%" : "40%"}
          mx="auto"
          bg={useColorModeValue("white", "gray.800")}
          shado="lg"
          rounded="lg"
          overflow="hidden"
        >
          <Spacer height={2} />

          <Image
            w={200}
            h={200}
            fit="cover"
            objectPosition="center"
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
            borderRadius="100%"
          />

          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            py={4}
            px={6}
          >
            <chakra.h1
              fontSize="xl"
              fontWeight="bold"
              color={useColorModeValue("gray.800", "white")}
            >
              Patterson johnson
            </chakra.h1>

            <chakra.p
              py={2}
              color={useColorModeValue("gray.700", "gray.400")}
              textAlign="center"
            >
              Full Stack maker & UI / UX Designer , love hip hop music Author of
              Building UI.
            </chakra.p>
            <Spacer height={2} />

            <Flex flexDirection="column">
              <chakra.p
                color={useColorModeValue("gray.700", "gray.400")}
                fontWeight="bold"
              >
                Supporters
              </chakra.p>

              <chakra.p
                pt={3}
                color={useColorModeValue("gray.700", "gray.400")}
                textAlign="center"
              >
                0
              </chakra.p>
            </Flex>
          </Box>

          <Spacer height={1} />
        </Box>
      </Flex>
    </Box>
  );
};

export default ProfileScreen;
