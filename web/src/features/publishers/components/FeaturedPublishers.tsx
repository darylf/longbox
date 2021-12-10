import React from "react";
import FeaturedItem from "../../../components/FeaturedItem";
import { Publisher, SortDirectionEnum } from "../../../types";
import { usePublishersQuery } from "../api/publishers.query.generated";
import PublisherCard from "./PublisherCard";

const FeaturedPublishers = function () {
  const { data, loading, error } = usePublishersQuery({
    variables: {
      direction: SortDirectionEnum.Desc,
      field: "series_count",
      limit: 5,
    },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  const publisherList: Publisher[] =
    data?.publishers.nodes?.map((p) => p as Publisher) ?? [];

  return (
    <FeaturedItem
      title="Featured Publishers"
      items={publisherList}
      moreLinkText="Browse all publishers"
      moreLinkUrl="/publishers"
    >
      {(publisher) => <PublisherCard publisher={publisher} />}
    </FeaturedItem>
  );
};

export default FeaturedPublishers;
