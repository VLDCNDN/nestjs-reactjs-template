import { Component } from 'react';
import { Link } from 'react-router-dom';
import CatList from '../components/CatList';

// App.js
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: [],
      cat: {
        name: '',
        breed: '',
        age: 0,
      },
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch('/api/cats')
      .then((res) => res.json())
      .then((result) => {
        this.setState((prevState) => ({
          cats: result,
        }));
      });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState((prevState) => ({
      cat: {
        ...prevState.cat,
        [name]: value,
      },
    }));
  }

  handleSubmit(event) {
    event.preventDefault();

    const toAddCat = this.state.cat;
    console.log(toAddCat);
    fetch('/api/cats', {
      method: 'post',
      headers: { 'Content-Type' : 'application/json'},
      body: JSON.stringify(toAddCat),
    })
    .then(resp => {
      if(resp.status === 201) {
        this.setState((prevState) => ({
          cats: [
            ...prevState.cats,
            toAddCat,
          ],
        }));
      }
    });
  }

  render() {
    return (
      <>
        <nav>
          <Link to="/about">About</Link>
        </nav>
        <main>
          <h3>Please enter a cat</h3>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                required
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="age">Age</label>
              <input
                type="number"
                name="age"
                required
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="breed">Breed</label>
              <input
                type="text"
                name="breed"
                required
                onChange={this.handleInputChange}
              />
            </div>

            <input type="submit" value="Submit" />
          </form>
          <CatList cats={this.state.cats} />
        </main>
      </>
    );
  }
}

export default Home;
