import { Component } from 'react';
import CatItem from './CatItem';

class CatList extends Component {

  render() {
    let cats = (this.props.cats).reverse();

    return (
      <>
        <h2 className="text-lg font-medium">Cat List</h2>
        <ul className="h-32 w-auto overflow-y-auto no-scrollbar">
        {
          cats.map((cat, index) => {
            return <CatItem key={index} cat={cat} />
          })
        }
        </ul>
      </>
    );
  }
}

export default CatList;
