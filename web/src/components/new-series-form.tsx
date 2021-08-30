import React, { useState } from "react";
import { Series, useCreateSeriesMutation } from "../hooks/use-graphql";
import SeriesForm from "./series-form";

function NewSeriesForm(): React.ReactElement {
  const [series, setSeries] = useState<Series>({} as Series);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [createPublisher, { loading }] = useCreateSeriesMutation({
    variables: {
      name: `${series?.name}`,
      publisherId: `${series?.publisher?.id}`,
    },
    onCompleted: () => {
      setIsModalOpen(false);
    },
    onError: (error) => console.error("An error has occured", error),
  });

  const handleSubmit = (seriesParam: Partial<Series>) => {
    createPublisher({
      variables: {
        name: seriesParam.name ?? "",
        publisherId: seriesParam.publisher?.id ?? "",
      },
    });
  };

  return (
    <SeriesForm
      buttonText="Create a Series"
      handleSubmit={handleSubmit}
      isLoading={loading}
      isModalOpen={isModalOpen}
      series={series}
      setIsModalOpen={setIsModalOpen}
      userErrors={[]}
    />
  );
}
export default NewSeriesForm;
