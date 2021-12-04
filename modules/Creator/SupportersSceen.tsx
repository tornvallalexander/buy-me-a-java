import { Box, chakra, Flex, Heading, useMediaQuery } from "@chakra-ui/react";
import { useState } from "react";
import Spacer from "../../components/Spacer";

const SupportersScreen = () => {
  const [isMobile] = useMediaQuery("(max-width: 1000px)");
  const [demoSupporters, setDemoSupporters] = useState([
    {
      name: "Hakim",
      amount: "100",
    },
    {
      name: "Alex",
      amount: "80",
    },
  ]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Spacer height={5} />

      <Heading>Top Supporters</Heading>

      <Spacer height={5} />

      <Flex
        flexDirection="column"
        width={isMobile ? "95%" : "50%"}
        justifyContent="center"
        alignItems="center"
      >
        {demoSupporters.map((supporter) => {
          return (
            <Box
              key={supporter.name}
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
              width={isMobile ? "100%" : "60%"}
              height={50}
              backgroundColor="white"
              p={5}
              mb={5}
            >
              <chakra.h1 fontWeight="bold">{supporter.name}</chakra.h1>
              <chakra.h1>{`${supporter.amount} $`}</chakra.h1>
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
};

export default SupportersScreen;
