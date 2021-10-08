import { Heading, Image } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { useParams } from "react-router-dom";
import { Head } from "../../../components/Head";
import { useUserQuery } from "../api/user.query.generated";

export default function User(): ReactElement {
  const { id } = useParams();
  const { data, loading, error } = useUserQuery({
    variables: { id: `${id}` },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>An error has occured...</p>;

  const user = data?.user;

  return (
    <>
      {user && (
        <>
          <Head title={`${user.username}'s Comic Book Profile`} />
          <Heading>{user.username}</Heading>
          <Image src={user.avatar} />
        </>
      )}
    </>
  );
}
