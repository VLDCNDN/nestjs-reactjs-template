import { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {
  render() {
    return (
      <>
        <main className="flex flex-col text-neutral-200 h-full justify-center items-center">
          <h2>Fullstack : NestJS - Reactjs template</h2>
          <br/>
          <nav>
            Go to <Link to="/">Home</Link>
          </nav>
        </main>
      </>
    );
  }
}

export default About;
