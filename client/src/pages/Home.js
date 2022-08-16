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
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(toAddCat),
    }).then((resp) => {
      if (resp.status === 201) {
        this.setState((prevState) => ({
          cats: [...prevState.cats, toAddCat],
        }));
      }
    });
  }

  render() {
    return (
      <>
        <main className="flex flex-col justify-between h-full text-neutral-200">
          <div className="flex flex-col h-full items-center justify-center space-y-2">
            <div className="flex flex-col space-y-2">
              <h3 class="text-3xl font-medium leading-6">Add Cat</h3>
              <br />
              <form onSubmit={this.handleSubmit}>
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3">
                    <label
                      className="block text-sm font-medium mb-1"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      className="p-1 text-neutral-900 focus:ring-neutral-700 focus:border-neutral-700 block w-full shadow-sm sm:text-sm border-neutral-300 rounded-sm"
                      type="text"
                      name="name"
                      required
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="col-span-3">
                    <label
                      className="block text-sm font-medium mb-1"
                      htmlFor="age"
                    >
                      Age
                    </label>
                    <input
                      className="p-1 text-neutral-900 focus:ring-neutral-700 focus:border-neutral-700 block w-full shadow-sm sm:text-sm border-neutral-300 rounded-sm"
                      type="number"
                      name="age"
                      required
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="col-span-3">
                    <label
                      className="block text-sm font-medium mb-1"
                      htmlFor="breed"
                    >
                      Breed
                    </label>
                    <input
                      className="p-1 text-neutral-900 focus:ring-neutral-700 focus:border-neutral-700 block w-full shadow-sm sm:text-sm border-neutral-300 rounded-sm"
                      type="text"
                      name="breed"
                      required
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>

                <input
                  className="mt-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-neutral-600 hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500"
                  type="submit"
                  value="Add"
                />
              </form>
            </div>
            <br></br>
            <CatList cats={this.state.cats} />
          </div>

          <nav className="">
            <span className="text-neutral-200 text-lg">
              Visit{' '}
              <Link className="underline" to="/about">
                About
              </Link>
            </span>
          </nav>
        </main>
      </>
    );
  }
}

export default Home;
