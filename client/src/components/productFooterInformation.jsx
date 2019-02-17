import React from "react";
import axios from "axios";

class ProductFooterInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: 47,
      description: []
    };
    this.getDescription = this.getDescription.bind(this);
  }

  componentDidMount() {
    this.getDescription();
  }

  getDescription() {
    axios.get(`api/description/${this.state.productId}`)
    .then(({ data }) => {
      this.setState({ description: data });
    })
    .catch((err) => console.error(err));
  }

  render() {
    return (
      <div>
        <h1>Description Test id:{this.state.productId}</h1>
        <ul>
          {this.state.description.map(bullet => (
            <li>{bullet.descriptionBullet}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ProductFooterInformation;
