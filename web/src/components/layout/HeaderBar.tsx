import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useAuthenticationToken from "../../components/auth/useAuthenticationToken";
import SearchBox from "../shared/SearchBox";

const StyledHeaderBar = styled.div`
  text-align: left;
  display: flex;
  margin-bottom: 3em;
`;

const StyledSearchBar = styled.div``;

const Button = styled.div`
  display: inline-block;
  text-align: center;
  background-color: #ccc;
`;

const StyledLink = styled(Link)`
  margin: 1em;
  padding: 3px;
`;

const ActionBar = styled.div`
  text-align: right;
  flex-grow: 2;
`;

const HeaderBar: React.FunctionComponent = () => {
  const { token, setToken } = useAuthenticationToken();
  return (
    <StyledHeaderBar>
      <StyledSearchBar>
        <SearchBox />
      </StyledSearchBar>
      <ActionBar>
        <Button>
          <StyledLink to="/login">{token ?? "Login"}</StyledLink>
        </Button>
      </ActionBar>
    </StyledHeaderBar>
  );
};

export default HeaderBar;
