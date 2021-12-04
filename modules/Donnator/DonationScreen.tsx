import {
  Box,
  Button,
  chakra,
  Flex,
  Input,
  useMediaQuery,
} from "@chakra-ui/react";
import { useState } from "react";
import Spacer from "../../components/Spacer";

interface CreatorsListItems {
  name: string;
  description: string;
}

const DonationScreen = () => {
  const [isMobile] = useMediaQuery("(max-width: 1000px)");
  const [creatorsList, setCreatorsList] = useState<Array<CreatorsListItems>>([
    { name: "Hakim", description: "i am a very good coder!" },
    { name: "Alex", description: "i am a very good programmer!" },
  ]);
  const [Creators, setCreators] =
    useState<Array<CreatorsListItems>>(creatorsList);

  const search = (term: string) => {
    if (term) {
      setCreators(
        creatorsList.filter((creator) =>
          creator.name.toUpperCase().includes(term.toUpperCase())
        )
      );
    } else {
      setCreators(creatorsList);
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Spacer height={5} />

      <Input
        width={isMobile ? "98%" : "43%"}
        borderColor="gray"
        border="2px solid gray"
        placeholder="Search something..."
        onChange={(e) => {
          search(e.target.value);
        }}
      />
      <Spacer height={4} />

      <Flex
        flexDirection="column"
        justifyContent="center"
        width={isMobile ? "95%" : "40%"}
      >
        {Creators.map((creator) => {
          return (
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              backgroundColor="white"
              mb={5}
              padding={3}
              borderRadius="10px"
            >
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
              >
                <chakra.h1 fontSize={20} fontWeight="bold">
                  {creator.name}
                </chakra.h1>

                <chakra.h1>{creator.description}</chakra.h1>
              </Box>

              <Button backgroundColor="#1D1D1D" color="white">
                Donate
              </Button>
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
};

export default DonationScreen;
