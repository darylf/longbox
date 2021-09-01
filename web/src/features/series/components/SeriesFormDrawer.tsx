import React from "react";
import FormDrawer from "../../../components/FormDrawer";
import { Publisher } from "../../../types";
import SeriesForm from "./SeriesForm";

interface SeriesFormDrawer {
  publisher: Publisher;
}

function SeriesFormDrawer({ publisher }: SeriesFormDrawer) {
  const id = "series-form";
  return (
    <FormDrawer id={id} title="Add Series">
      <SeriesForm id={id} selectedPublisher={publisher} />
    </FormDrawer>
  );
}

export default SeriesFormDrawer;
