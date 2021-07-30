import React, {
  createContext,
  useCallback,
  useContext,
  useReducer,
} from "react";
import { useLoginMutation, useLogoutMutation } from "./use-graphql";

const TOKEN = "token";
const USER = "attributes";

type ActionType =
  | { type: "LOGIN"; token: string; user: UserAttributes }
  | { type: "LOGOUT" };

interface LoginState {
  authenticated: boolean;
  errors: string[];
  token: string | null;
  user: UserAttributes | null;
}

type UserAttributes = { id: string; name: string; avatar: string };

type UseAuthenticationManagerResult = ReturnType<
  typeof useAuthenticationManager
>;

const initialLoginState: Readonly<LoginState> = {
  authenticated: false,
  errors: new Array<string>(),
  token: null,
  user: null,
};

export function getInitialLoginState(): LoginState {
  const token = sessionStorage.getItem(TOKEN);
  const user_session = sessionStorage.getItem(USER);

  const user = user_session === null ? null : JSON.parse(user_session);
  const authenticated = token !== null;

  return {
    ...initialLoginState,
    authenticated: authenticated,
    user: user,
  };
}

const AuthenticationContext = createContext<UseAuthenticationManagerResult>({
  loginState: getInitialLoginState(),
  login: () => {
    // do nothing.
  },
  logout: () => {
    // do nothing.
  },
});

function useAuthenticationManager(initialLoginState: LoginState): {
  loginState: LoginState;
  login: (
    email: string,
    password: string,
    handleError: (message: string) => void
  ) => void;
  logout: () => void;
} {
  const [loginState, dispatch] = useReducer(
    (state: LoginState, action: ActionType) => {
      switch (action.type) {
        case "LOGIN":
          return {
            authenticated: true,
            errors: new Array<string>(),
            token: state.token,
            user: state.user,
          };
        case "LOGOUT":
          return {
            authenticated: false,
            errors: new Array<string>(),
            token: null,
            user: null,
          };
        default:
          throw new Error();
      }
    },
    initialLoginState
  );

  const [logoutMutation] = useLogoutMutation({
    onCompleted: () => {
      sessionStorage.clear();
      dispatch({
        type: "LOGOUT",
      });
    },
  });

  const [loginMutation] = useLoginMutation({
    onCompleted: (data) => {
      const attributes = data.login;
      if (attributes?.jwt && attributes.user) {
        sessionStorage.setItem(TOKEN, attributes.jwt);
        sessionStorage.setItem(USER, JSON.stringify(attributes.user));
        dispatch({
          type: "LOGIN",
          token: attributes.jwt,
          user: attributes.user,
        });
      }
      loginMutation({ variables: { email: "", password: "" } });
    },
    onError: (error) => {
      console.log(error);
      // handleError(error.message);
    },
  });

  const login = useCallback(
    (
      email: string,
      password: string,
      handleError: (message: string) => void
    ) => {
      loginMutation({ variables: { email, password } });
    },
    []
  );

  const logout = useCallback(() => {
    // logoutMutation();
    sessionStorage.clear();
  }, []);

  return { loginState, login, logout };
}

export const AuthenticationProvider: React.FunctionComponent<{
  initialLoginState: LoginState;
}> = ({
  initialLoginState,
  children,
}: {
  initialLoginState: LoginState;
  children?: React.ReactNode;
}) => (
  <AuthenticationContext.Provider
    value={useAuthenticationManager(initialLoginState)}
  >
    {children}
  </AuthenticationContext.Provider>
);

export const useLoginState = (): LoginState => {
  const { loginState } = useContext(AuthenticationContext);
  return loginState;
};

export const useLogin = (): UseAuthenticationManagerResult["login"] => {
  const { login } = useContext(AuthenticationContext);
  return login;
};

export const useLogout = (): UseAuthenticationManagerResult["logout"] => {
  const { logout } = useContext(AuthenticationContext);
  return logout;
};
