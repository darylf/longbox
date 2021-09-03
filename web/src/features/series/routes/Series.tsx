import React, { useState } from "react";
import { useParams } from "react-router-dom";
import FormDrawer from "../../../components/FormDrawer";
import { Head } from "../../../components/Head";
import { Series as SeriesObj } from "../../../types";
import BookForm from "../../books/components/BookForm";
import { useSeriesQuery } from "../api/series.query.generated";
import ShowSeries from "../components/ShowSeries";

const formHtmlId = "book-form";

export default function Series(): React.ReactElement {
  const { id } = useParams();
  const [series, setSeries] = useState<SeriesObj | null>(null);
  const { loading, error } = useSeriesQuery({
    variables: { id },
    onCompleted: (data) => setSeries(data.series as SeriesObj),
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>An error has occured...</p>;

  return (
    <>
      <Head title={`${series?.name}`} />
      {series && <ShowSeries series={series} />}
      <FormDrawer id={formHtmlId} openButtonText="Create Book">
        <BookForm htmlId={formHtmlId} series={series} />
      </FormDrawer>
    </>
  );
}
