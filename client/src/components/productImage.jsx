import React from "react";
import axios from "axios";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class ProductImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: 47,
      logoImg: "",
      images: [],
      primaryImage: ""
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
    axios
      .get(`api/items/${this.state.productId}`)
      .then(({ data }) => {
        this.setState({ logoImg: data.logoOverlay });
      })
      .catch(err => console.error(err));
  }
  getImages() {
    axios
      .get(`api/images/${this.state.productId}`)
      .then(({ data }) => {
        this.setState({ images: data, primaryImage: data[0] }); //configure data to be specifying what in data is images data.img
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md="auto">
            {/* <h1>Image Testing id:{this.state.productId}</h1> */}
            <Image
              src={this.state.primaryImage.imgSrc}
              width="470"
              height="350"
            />
          </Col>
        </Row>
        <Row >
          {this.state.images.map(image => (
            <Col md="auto">
              <Image src={image.imgSrc} thumbnail width="56" height="48"/>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default ProductImage;
