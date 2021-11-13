import * as React from 'react';
import { Link } from 'gatsby';
import Seo from '../components/seo';

const About = () => {
  return (
    <>
      <Seo
        title="About Generosa Litton's Scuba Diving Blog"
        description="Info about scuba diving blog"
      />
      <main>
        <h1>Hello from the About page!</h1>
        <Link to="/">Home</Link>
      </main>
    </>
  );
};

export default About;
