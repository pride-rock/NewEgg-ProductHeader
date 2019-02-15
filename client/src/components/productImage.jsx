import React from "react";
import axios from "axios";

class ProductImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: 47,
      logoImg: "",
      images: []
    };
    this.getImages = this.getImages.bind(this);
    this.getLogo = this.getLogo.bind(this);
  }

  componentDidMount() {
    // request images from database
    this.getImages();
    this.getLogo();
  }

  getLogo() {
    axios.get(`api/items/${this.state.productId}`)
      .then(({ data }) => {
        this.setState({ logoImg: data.logoOverlay });
      })
      .catch(err => console.error(err));
  }
  getImages() {
    axios.get(`api/images/${this.state.productId}`)
      .then(({ data }) => {
        this.setState({ images: data[0].imgSrc }); //configure data to be specifying what in data is images data.img
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div>
        <h1>Image Testing</h1>
        <img
          src={this.state.images}
          // set index element [0] as primary
        />
        {/* several tiles images, .map() through these */}
      </div>
    );
  }
}

export default ProductImage;
