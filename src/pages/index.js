import * as React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';

const IndexPage = ({ data }) => {
  return (
    <Layout>
      {data.allMdx.nodes.map((node) => {
        return (
          <article key={node.id}>
            <h3>
              <Link to={`${node.slug}`}>{node.frontmatter.title}</Link>
            </h3>
            <p>Posted: {node.frontmatter.date}</p>
          </article>
        );
      })}
    </Layout>
  );
};

export const query = graphql`
  query GetAllBlogs {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
        }
        id
        slug
      }
    }
  }
`;

export default IndexPage;
