import React, {FC} from 'react';
import {Helmet} from 'react-helmet';

interface IProps {
  title: string;
  description: string;
}

const SEO: FC<IProps> = ({description, title}: IProps) => (
  <Helmet
    title={title}
    meta={[
      {
        name: `description`,
        content: description,
      },
      {
        property: `og:title`,
        content: title,
      },
      {
        property: `og:description`,
        content: description,
      },
      {
        property: `og:type`,
        content: `website`,
      },
    ]}
  />
);

export default SEO;
