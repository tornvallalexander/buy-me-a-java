import {
  Box,
  Button,
  chakra,
  Flex,
  Input,
  useMediaQuery,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Spacer from "../../components/Spacer";

interface CreatorsListItems {
  userName: string;
  bio: string;
  userType: boolean;
  email: string;
  password: string;
}

const DonationScreen = () => {
  const [isMobile] = useMediaQuery("(max-width: 1000px)");
  const [creatorsList, setCreatorsList] = useState<Array<CreatorsListItems>>(
    []
  );
  const [Creators, setCreators] =
    useState<Array<CreatorsListItems>>(creatorsList);

  const search = (term: string) => {
    if (term) {
      setCreators(
        creatorsList.filter((creator) =>
          creator.userName.toUpperCase().includes(term.toUpperCase())
        )
      );
    } else {
      setCreators(creatorsList);
    }
  };

  useEffect(() => {
    axios.get("http://localhost:5000/api/v1/getCreators").then((res) => {
      console.log(res.data);

      setCreators(res.data.users);
      setCreatorsList(res.data.users);
    });
  }, []);

  return (
    <>
      {creatorsList.length && (
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Spacer height={5} />

          <Input
            width={isMobile ? "98%" : "43%"}
            borderColor="#a8a8a8"
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
                      {creator.userName}
                    </chakra.h1>

                    <chakra.h1>{creator.bio}</chakra.h1>
                  </Box>

                  <Button backgroundColor="#1D1D1D" color="white">
                    Donate
                  </Button>
                </Box>
              );
            })}
          </Flex>
        </Box>
      )}
    </>
  );
};

export default DonationScreen;
