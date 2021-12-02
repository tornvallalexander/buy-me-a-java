import * as React from "react";
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
          <Flex>
            {/*replace with image here*/}
            <Heading
              as={Link}
              href={ROUTES.HOME}
              fontSize="xl"
              fontWeight="medium"
              ml="2"
            >
              Buy me a JAVA
            </Heading>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{ base: "none", md: "inline-flex" }}
            >
              <NavLinkItem href={ROUTES.REGISTER} text="Register" />
              <NavLinkItem href={ROUTES.LOGIN} text="Login" />
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

                <NavLinkItem
                  href={ROUTES.REGISTER}
                  text="Register"
                  width="full"
                />
                <NavLinkItem href={ROUTES.LOGIN} text="Login" width="full" />
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </Heading>
    </React.Fragment>
  );
};

export default Header;
