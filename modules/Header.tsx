import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  CloseButton,
  Flex,
  Heading,
  HStack,
  IconButton,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import * as ROUTES from "../constants/routes";
import { AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import Logo from "../assets/logo.png";
import { getCookie } from "cookies-next";
import jwt from "jsonwebtoken";

interface NavLinkProps {
  children: React.ReactNode;
  href: string;
}

interface NavLinkItemProps {
  href: string;
  text: string;
  children?: React.ReactNode;
  [rest: string]: any;
}

const NavLinkItem = ({ children, href, text, ...rest }: NavLinkItemProps) => {
  return (
    <Button variant="ghost" borderRadius="full" p="1.2rem" {...rest}>
      <NavLink href={href}>
        <span>{text}</span>
        {children}
      </NavLink>
    </Button>
  );
};

const NavLink = ({ children, href }: NavLinkProps) => {
  return (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  );
};

const Header = () => {
  const mobileNav = useDisclosure();
  const [userID, setUserID] = useState(getCookie("TOKEN"));
  const [type, setType] = useState("none");

  useEffect(() => {
    if (userID) {
      const user: any = jwt.decode(userID.toString());
      setType(user.userType);
    } else {
      setType("none");
    }
  }, []);

  const displayNavItems = (isMobile: boolean) => {
    switch (type) {
      case "creator":
        return (
          <>
            <NavLinkItem
              href={ROUTES.CREATOR}
              text="My Profile"
              width={isMobile && "full"}
            />
            <NavLinkItem
              href={ROUTES.CREATOR_SUPPORTERS}
              text="Supporters"
              width={isMobile && "full"}
            />
          </>
        );
        break;
      case "donator":
        return (
          <>
            <NavLinkItem
              href={ROUTES.DONATOR}
              text="My Profile"
              width={isMobile && "full"}
            />
            <NavLinkItem
              href={ROUTES.DONATOR_CREATORS}
              text="Creators"
              width={isMobile && "full"}
            />
          </>
        );
        break;
      case "none":
        return (
          <>
            <NavLinkItem
              href={ROUTES.REGISTER}
              text="Register"
              width={isMobile && "full"}
            />
            <NavLinkItem
              href={ROUTES.LOGIN}
              text="Login"
              width={isMobile && "full"}
            />
          </>
        );
        break;
      default:
    }
  };

  return (
    <React.Fragment>
      <Heading
        bg="white"
        mt="1rem"
        w={{ base: "full", md: "95vw" }}
        px={{ base: 2, sm: 4 }}
        py={4}
        mx="auto"
        shadow="xl"
        borderRadius="full"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Box alignItems="center" ml={10}>
            <Link href={ROUTES.HOME}>
              <a>
                <Image src={Logo} alt="Logo" width={42} height={42} />
              </a>
            </Link>
          </Box>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{ base: "none", md: "inline-flex" }}
            >
              {displayNavItems(false)}
            </HStack>
            <Button colorScheme="brand" size="sm">
              Get Started
            </Button>
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg="white"
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />

                {displayNavItems(true)}
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </Heading>
    </React.Fragment>
  );
};

export default Header;
