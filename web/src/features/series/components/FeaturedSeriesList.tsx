import { Box, Image } from "@chakra-ui/react";
import React from "react";
import FeaturedItem from "../../../components/FeaturedItem";
import Link from "../../../components/Link";
import { Series, SortDirectionEnum } from "../../../types";
import { useSeriesListQuery } from "../api/series-list.query.generated";

const FeaturedSeriesList = function () {
  const { data, loading, error } = useSeriesListQuery({
    variables: {
      direction: SortDirectionEnum.Desc,
      field: "book_count",
      limit: 5,
    },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  const seriesList: Series[] =
    data?.seriesList.nodes?.map((p) => p as Series) ?? [];

  return (
    <FeaturedItem
      title="Featured Series"
      items={seriesList}
      moreLinkText="Browse all series"
      moreLinkUrl="/series"
    >
      {(series) => (
        <Box p={5}>
          <Link to={`/series/${series.id}`}>
            <Image
              src={series.logo?.url}
              alt={`logo of ${series.name}`}
              roundedTop="lg"
            />

            {series.name}
          </Link>
        </Box>
      )}
    </FeaturedItem>
  );
};

export default FeaturedSeriesList;
