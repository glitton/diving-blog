import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const About = () => {
  return (
    <Layout
      title="About Generosa Litton's Scuba Diving Blog"
      description="Info about scuba diving blog"
    >
      <h1>Hello from the About page!</h1>
      <Link to="/">Home</Link>
    </Layout>
  );
};

export default About;
