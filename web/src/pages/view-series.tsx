import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import SeriesForm from "../components/series-form";
import ShowSeries from "../components/show-series";
import { useLoginState } from "../hooks/use-authentication";
import {
  Series,
  useSeriesQuery,
  useUpdateSeriesMutation,
} from "../hooks/use-graphql";

function ViewSeries(): React.ReactElement {
  const { id } = useParams<{ id: string }>();
  const [series, setSeries] = useState<Series | null>(null);
  const { authenticated } = useLoginState();
  const { loading, error } = useSeriesQuery({
    variables: { id },
    onCompleted: (data) => setSeries(data.series as Series),
  });
  const [updateSeries, { data: dataMutation }] = useUpdateSeriesMutation({
    variables: { id, name: series?.name ?? "" },
    onCompleted: (data) => {
      if (data.updateSeries?.series)
        setSeries({ ...series, ...data.updateSeries?.series } as Series);
    },
  });

  const handleSubmit = (series: Partial<Series>) => {
    updateSeries({ variables: { id, name: series.name ?? "" } });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>An error has occured...</p>;

  return (
    <>
      {series && (
        <>
          <ShowSeries series={series} />
          {authenticated && (
            <Box mt={2} textAlign="right">
              <SeriesForm
                series={series}
                handleSubmit={handleSubmit}
                isLoading={loading}
                userErrors={dataMutation?.updateSeries?.errors}
              />
            </Box>
          )}
        </>
      )}
    </>
  );
}

export default ViewSeries;
