import React from "react";
import axios from "axios";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReactImageMagnify from 'react-image-magnify';

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
    const idtag = window.location.href.split('/')[3]
    axios.get(`http://18.223.158.147/api/items/${idtag}`)
      .then(({ data }) => {
        this.setState({ logoImg: data.logoOverlay });
      })
      .catch(err => console.error(err));
  }
  getImages() {
    const idtag = window.location.href.split('/')[3]
    axios.get(`http://18.223.158.147/api/images/${idtag}`)
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
            {/* <Image
              //Attempt on hover zoom effect, STILL IN IMPLEMENTATION PHASE

              //require ability to switch images on mouse hover
              src={this.state.primaryImage.imgSrc}
              width="470"
              height="350"
            /> */}
            <ReactImageMagnify className="primeImage"
              {...{
                smallImage: {
                  alt: "Wristwatch by Ted Baker London",
                  width: 470,
                  height: 350,
                  src: this.state.primaryImage.imgSrc
                },
                largeImage: {
                  src: this.state.primaryImage.imgSrc,
                  width: 1024,
                  height: 768,
                  enlargedImagePortalId: ".target-zoom"
                }
              }}
            />
          </Col>
        </Row>
        {/* test className here */}
        <Row className="justify-content-center">
          {/* require css formatting to cluster tiles in center justified */}
          {this.state.images.map(image => (
            <Col md="auto">
              <Image src={image.imgSrc} thumbnail width="56" height="48" />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default ProductImage;
