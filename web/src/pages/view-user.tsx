import { Heading, Image } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import { useUserQuery } from "../hooks/use-graphql";

function ViewUser(): React.ReactElement {
  const { id } = useParams<{ id: string }>();
  const { data, loading, error } = useUserQuery({
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>An error has occured...</p>;

  const user = data?.user;

  return (
    <>
      {user && (
        <>
          <Heading>{user.username}</Heading>
          <Image src={user.avatar} />
        </>
      )}
    </>
  );
}

export default ViewUser;
