import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Series as SeriesObj } from "../../../types";
import { useSeriesQuery } from "../api/series.query.generated";
import ShowSeries from "../components/ShowSeries";

export default function Series(): React.ReactElement {
  const { id } = useParams();
  const [series, setSeries] = useState<SeriesObj | null>(null);
  const { loading, error } = useSeriesQuery({
    variables: { id },
    onCompleted: (data) => setSeries(data.series as SeriesObj),
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>An error has occured...</p>;

  return <>{series && <ShowSeries series={series} />}</>;
}
