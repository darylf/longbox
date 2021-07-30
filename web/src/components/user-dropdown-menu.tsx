import {
  Avatar,
  Box,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";
import {
  useLoginState,
  useLogout,
  UserAttributes,
} from "../hooks/use-authentication";

export function LoginControl(): ReactElement {
  return (
    <Flex alignItems="center">
      <HStack>
        <Link to="/login">Login</Link>
      </HStack>
    </Flex>
  );
}

interface UserDropDownMenuProps {
  user: UserAttributes | null;
}
export function UserDropDownMenu({
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
              <Text fontSize="sm">{user?.name}</Text>
              <Text fontSize="xs" color="gray.600">
                User Type
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
}

export function UserActions(): ReactElement {
  const loginState = useLoginState();
  if (!loginState.authenticated) return <LoginControl />;

  return <UserDropDownMenu user={loginState.user} />;
}
