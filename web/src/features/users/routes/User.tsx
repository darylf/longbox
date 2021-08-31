import { Heading, Image } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import { useUserQuery } from "../api/user.query.generated";

export default function User(): React.ReactElement {
  const { id } = useParams();
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
