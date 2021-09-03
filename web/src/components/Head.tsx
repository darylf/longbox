import React from "react";
import { Helmet } from "react-helmet-async";

type HeadProps = {
  title?: string;
  description?: string;
};

export const Head = ({ title, description }: HeadProps = {}) => {
  return (
    <Helmet
      title={title ? `${title} | Longbox` : undefined}
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
