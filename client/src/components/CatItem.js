import { Component } from 'react';

class CatItem extends Component {

  render() {
    const { name, age, breed } = this.props.cat; 

    return <>
      <li>{name} ({breed}) - {age}</li>
    </>;
  }
}

export default CatItem;
