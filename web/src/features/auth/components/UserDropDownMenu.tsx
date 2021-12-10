import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { FiChevronDown } from "react-icons/fi";
import Link from "../../../components/Link";
import {
  useLoginState,
  useLogout,
  UserAttributes,
} from "../../../hooks/useAuthentication";

export const LoginControl = function (): ReactElement {
  return (
    <Flex alignItems="center">
      <HStack>
        <Link fontSize="sm" fontWeight={400} variant="link" to="/auth/login">
          Sign In
        </Link>
        <Button
          display={{ base: "none", md: "inline-flex" }}
          fontSize="sm"
          fontWeight={600}
          color="white"
          bg="pink.400"
          href="#"
          _hover={{
            bg: "pink.300",
          }}
        >
          Sign Up
        </Button>
      </HStack>
    </Flex>
  );
};

const DEFAULT_ROLE: Readonly<string> = "User";

// Remove "User" if the list of roles has more than one
function getUserType(user: { roles: string[] } | null): string {
  if (user === null || user.roles === undefined) return DEFAULT_ROLE;
  const displayableRoles = user.roles.filter((r) => r !== DEFAULT_ROLE);
  if (displayableRoles.length === 0) return DEFAULT_ROLE;
  return displayableRoles.join(",");
}

interface UserDropDownMenuProps {
  user: UserAttributes | null;
}
export const UserDropDownMenu = function ({
  user,
}: UserDropDownMenuProps): ReactElement {
  const logout = useLogout();
  const avatarUrl = user?.avatar;
  return (
    <Flex alignItems="center">
      <Menu>
        <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: "none" }}>
          <HStack>
            <Avatar size="sm" src={avatarUrl} />
            <VStack
              display={{ base: "none", md: "flex" }}
              alignItems="flex-start"
              spacing="1px"
              ml="2"
            >
              <Text fontSize="sm">{user?.username}</Text>
              <Text fontSize="xs" color="gray.600">
                {getUserType(user)}
              </Text>
            </VStack>
            <Box display={{ base: "none", md: "flex" }}>
              <FiChevronDown />
            </Box>
          </HStack>
        </MenuButton>
        <MenuList
          bg={useColorModeValue("white", "gray.900")}
          borderColor={useColorModeValue("gray.200", "gray.700")}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>Settings</MenuItem>
          <MenuDivider />
          <MenuItem>
            <Text onClick={logout}>Sign Out</Text>
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export const UserActions = function (): ReactElement {
  const loginState = useLoginState();
  if (!loginState.authenticated) return <LoginControl />;

  return <UserDropDownMenu user={loginState.user} />;
};
