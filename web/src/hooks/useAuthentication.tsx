import React, {
  createContext,
  useCallback,
  useContext,
  useReducer,
} from "react";
import { useLoginMutation } from "../features/auth/api/login.mutation.generated";
import { useLogOutMutation } from "../features/auth/api/logout.mutation.generated";

const ACCESS_TOKEN = "access";
const TOKEN = "token";
const USER = "attributes";

export type UserAttributes = {
  id: string;
  avatar: string;
  roles: string[];
  username: string;
};

type ActionType =
  | { type: "LOGIN_ERROR"; error: string }
  | { type: "LOGIN_LOADING"; loading: boolean }
  | { type: "LOGIN_SUCCESS"; token: string; user: UserAttributes }
  | { type: "LOGOUT" };

export interface LoginState {
  authenticated: boolean;
  error: string | null;
  loading: boolean;
  token: string | null;
  user: UserAttributes | null;
}

type UseAuthenticationManagerResult = ReturnType<
  typeof useAuthenticationManager
>;

const defaultLoginState: Readonly<LoginState> = {
  authenticated: false,
  error: null,
  loading: false,
  token: null,
  user: null,
};

export function getInitialLoginState(): LoginState {
  const token = sessionStorage.getItem(TOKEN);
  const userSession = sessionStorage.getItem(USER);

  const user = userSession === null ? null : JSON.parse(userSession);
  const authenticated = token !== null;

  return {
    ...defaultLoginState,
    authenticated,
    user,
  };
}

const defaultAuthenticationContext = {
  loginState: getInitialLoginState(),
  login: () => {
    // do nothing.
  },
  logout: () => {
    // do nothing.
  },
};

const AuthenticationContext = createContext<UseAuthenticationManagerResult>(
  defaultAuthenticationContext
);

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
        case "LOGIN_SUCCESS":
          return {
            ...state,
            authenticated: true,
            loading: false,
            token: action.token,
            user: action.user,
          } as LoginState;
        case "LOGIN_LOADING":
          return {
            ...state,
            loading: action.loading,
          } as LoginState;
        case "LOGIN_ERROR":
          return {
            ...state,
            authenticated: false,
            error: action.error,
          } as LoginState;
        case "LOGOUT":
          return {
            ...state,
            authenticated: false,
            errors: new Array<string>(),
            token: null,
            user: null,
          } as LoginState;
        default:
          throw new Error();
      }
    },
    initialLoginState
  );

  const [loginMutation] = useLoginMutation({
    onCompleted: (data) => {
      if (data.login && data.login.me) {
        const { me, accessToken, refreshToken } = data.login;
        sessionStorage.setItem(TOKEN, refreshToken);
        sessionStorage.setItem(ACCESS_TOKEN, accessToken);
        sessionStorage.setItem(USER, JSON.stringify(me));
        dispatch({
          type: "LOGIN_SUCCESS",
          token: refreshToken,
          user: me,
        });
        dispatch({ type: "LOGIN_LOADING", loading: false });
      }
    },
    onError: (error) => {
      console.error(error);
      dispatch({ type: "LOGIN_LOADING", loading: false });
    },
  });

  const [logoutMutation] = useLogOutMutation({
    onCompleted: () => {
      sessionStorage.clear();
      dispatch({
        type: "LOGOUT",
      });
    },
  });

  const login = useCallback(
    (email: string, password: string) => {
      dispatch({ type: "LOGIN_LOADING", loading: true });
      loginMutation({ variables: { email, password } });
    },
    [loginMutation]
  );

  const logout = useCallback(() => {
    logoutMutation();
    sessionStorage.clear();
    dispatch({ type: "LOGOUT" });
  }, []);

  return { loginState, login, logout };
}

export const AuthenticationProvider: React.FunctionComponent<{
  initialLoginState: LoginState;
  children?: React.ReactNode;
}> = function ({
  initialLoginState,
  children,
}: {
  initialLoginState: LoginState;
  children?: React.ReactNode;
}) {
  return (
    <AuthenticationContext.Provider
      value={useAuthenticationManager(initialLoginState)}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

AuthenticationProvider.defaultProps = {
  children: null,
};

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
