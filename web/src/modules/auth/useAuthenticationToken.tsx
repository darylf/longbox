import { useState } from 'react';

export const AUTH_TOKEN = 'CSRF';

interface AuthenticationTokenHook {
  token: string | null;
  setToken: (token: string) => void;
}

export default function useAuthenticationToken(): AuthenticationTokenHook {
  const setAuthenticationToken = (token: string) => {
    sessionStorage.setItem(AUTH_TOKEN, token);
    setToken(token);
  };

  const getAuthenticationToken = () => {
    return sessionStorage.getItem(AUTH_TOKEN);
  };

  const [token, setToken] = useState(getAuthenticationToken());

  return { token, setToken: setAuthenticationToken };
}
