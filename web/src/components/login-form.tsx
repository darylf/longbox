import {
  Alert,
  AlertDescription,
  AlertIcon,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Spinner,
} from "@chakra-ui/react";
import React, {
  FormEvent,
  ReactElement,
  useCallback,
  useRef,
  useState,
} from "react";
import { useLogin, useLoginState } from "../hooks/use-authentication";

export function ErrorMessage({ message }: { message: string }): ReactElement {
  return (
    <Box my={4}>
      <Alert status="error" borderRadius={4}>
        <AlertIcon />
        <AlertDescription>{message}</AlertDescription>
      </Alert>
    </Box>
  );
}

export function LoginForm(): ReactElement {
  const login = useLogin();
  const { loading } = useLoginState();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string | null>(null);
  const handleError = (message: string) => {
    setError(message);
  };

  const onLogin = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log("Logigng in?");
      if (emailRef.current && passwordRef.current) {
        login(emailRef.current.value, passwordRef.current.value, handleError);
      }
    },
    [login]
  );

  return (
    <Flex width="full" align="center" justifyContent="center">
      <Box
        p={8}
        maxWidth="500px"
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
      >
        <Box textAlign="center">
          <Heading>Login</Heading>
        </Box>
        {error && <ErrorMessage message={error} />}
        <Box my={4} textAlign="left">
          <form onSubmit={onLogin}>
            <FormControl isRequired>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                id="email"
                type="email"
                placeholder="user@example.com"
                ref={emailRef}
              />
            </FormControl>
            <FormControl mt={6} isRequired>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                id="password"
                type="password"
                placeholder="*******"
                ref={passwordRef}
              />
            </FormControl>
            <Button
              type="submit"
              variant="outline"
              width="full"
              mt={4}
              disabled={loading}
            >
              {loading ? <Spinner size="sm" /> : "Sign In"}
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  );
}
