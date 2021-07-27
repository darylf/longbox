import React, { ReactElement, useState } from "react";
import {
  Alert,
  AlertIcon,
  AlertDescription,
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  CircularProgress,
} from "@chakra-ui/react";

export function ErrorMessage({ message }: { message: string }) {
  return (
    <Box my={4}>
      <Alert status="error" borderRadius={4}>
        <AlertIcon />
        <AlertDescription>{message}</AlertDescription>
      </Alert>
    </Box>
  );
}

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    alert(`Email: ${email} & Password: ${password}`);
    setIsLoading(false);
    setError("Invalid username or password");
  };
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
        <Box my={4} textAlign="left">
          <form onSubmit={handleSubmit}>
            {error && <ErrorMessage message={error} />}
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="user@example.com"
                onChange={(event) => setEmail(event.currentTarget.value)}
              />
            </FormControl>
            <FormControl mt={6} isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="*******"
                onChange={(event) => setPassword(event.currentTarget.value)}
              />
            </FormControl>
            <Button
              type="submit"
              variantColor="teal"
              variant="outline"
              width="full"
              mt={4}
            >
              {isLoading ? (
                <CircularProgress isIndeterminate size="24px" color="teal" />
              ) : (
                "Sign In"
              )}
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  );
}

export default function LoginPage(): ReactElement {
  return <LoginForm />;
}
