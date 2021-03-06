import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  useMediaQuery,
  Button,
} from "@chakra-ui/react";
import { getCookie, setCookies } from "cookies-next";
import React, { useEffect, useState, useRef } from "react";
import Spacer from "../components/Spacer";
import ProfilePicBlank from "../assets/profile-picture-blank.png";
import Image from "next/image";
import axios from "axios";
import jwt from "jsonwebtoken";
import { stubFalse } from "lodash";

const defaultUserData = {
  userName: "NAME",
  bio: "BIO",
  userType: "donator",
};

const ProfileScreen = () => {
  const [isMobile] = useMediaQuery("(max-width: 1000px)");
  const [user, setUser] = useState<any>(defaultUserData);
  const [userToken, setUserToken] = useState<any>(getCookie("TOKEN"));
  const [currentUser, setIsCurrentUser] = useState(false);

  const logout = () => {
    setCookies("TOKEN", "");
    window.location.href = "/";
  };

  const getUser = (name: string, type: string) => {
    axios
      .post("http://localhost:5000/api/v1/getUser", {
        userName: name,
        userType: type,
      })
      .then((res) => {
        console.log(res.data);

        if (res.data.user) {
          setUser(res.data.user);
        } else if (res.data.error) {
          setUser(null);
          alert(res.data.error);
          window.location.href = "/";
        }
      });
  };

  useEffect(() => {
    const id = window.location.pathname;

    if (id.includes("donator")) {
      const user: any = jwt.decode(userToken);
      const userName = window.location.pathname.replace("/donator/", "");

      if (userName === user.userName) setIsCurrentUser(true);

      getUser(userName, "donator");
    } else {
      const user: any = jwt.decode(userToken);
      const userName = window.location.pathname.replace("/creator/", "");

      if (userName === user.userName) setIsCurrentUser(true);

      getUser(userName, "creator");
    }
  }, []);

  return (
    <>
      {user && (
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
                className="blank-picture"
                width={200}
                height={200}
                objectFit="cover"
                objectPosition="center"
                src={ProfilePicBlank}
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
                  {user.userName}
                </chakra.h1>

                <chakra.p
                  py={2}
                  color={useColorModeValue("gray.700", "gray.400")}
                  textAlign="center"
                >
                  {user.bio}
                </chakra.p>
                <Spacer height={2} />

                {user.userType === "creator" && (
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
                )}
              </Box>

              {userToken && currentUser && (
                <>
                  <Spacer height={1} />
                  <Button backgroundColor="#222" color="white" onClick={logout}>
                    Logout
                  </Button>
                </>
              )}

              <Spacer height={1} />
            </Box>
          </Flex>

          <style jsx global>{`
            .blank-picture {
              border-radius: 100%;
              cursor: pointer;
            }
          `}</style>
        </Box>
      )}
    </>
  );
};

export default ProfileScreen;
