import { ListItem, UnorderedList } from "@chakra-ui/react";
import React from "react";
import Link from "../../../components/Link";
import { useCreatorsQuery } from "../api/creators.query.generated";

export const CreatorList = function (): React.ReactElement {
  const { data, loading, error } = useCreatorsQuery();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  const creatorList = data?.creators.nodes;

  return (
    <UnorderedList>
      {creatorList?.map((c) => (
        <ListItem key={c?.id}>
          <Link
            to={`/creators/${c?.id}`}
          >{`${c?.firstName} ${c?.lastName}`}</Link>{" "}
          ({`${c?.roles?.join(", ")}`})
        </ListItem>
      ))}
    </UnorderedList>
  );
};
