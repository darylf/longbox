import React from "react";
import { Helmet } from "react-helmet-async";

type HeadProps = {
  title?: string;
  description?: string;
};

export const Head = function ({ title, description }: HeadProps = {}) {
  return (
    <Helmet
      title={title ? `Longbox - ${title}` : undefined}
      defaultTitle="Longbox"
    >
      <meta name="description" content={description} />
    </Helmet>
  );
};

Head.defaultProps = {
  title: undefined,
  description: undefined,
};
