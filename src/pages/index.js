import * as React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Seo from '../components/seo';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query GetSiteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const meta = data?.site?.siteMetadata ?? {};

  return (
    <>
      <Seo />
      <header>
        <Link to="/">{meta.title}</Link>
      </header>
      <main>
        <h1>Hello from the Index page!</h1>
        <Link to="/about">About</Link>
      </main>
    </>
  );
};

export default IndexPage;
