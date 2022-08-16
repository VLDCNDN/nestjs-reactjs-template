import { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {
  render() {
    return (
      <>
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <main>
          <h2>Who are we?</h2>
          <p>That feels like an existential question, don't you think?</p>
        </main>
      </>
    );
  }
}

export default About;
