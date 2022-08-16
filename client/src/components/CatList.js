import { Component } from 'react';
import CatItem from './CatItem';

class CatList extends Component {

  render() {
    let cats = this.props.cats;
    
    return (
      <>
        <h2>Cat List</h2>
        <ul>
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
