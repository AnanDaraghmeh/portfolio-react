import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, metaDescription }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
    </Helmet>
  );
};

export default SEO;
