import React from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

class ProductHeaderInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: 47,
      name: "",
      starRatings: "",
      reviewsQuantity: "",
      questionsQuantity: "",
      answersQuantity: "",
      stockQuantity: "",
      sellLimit: "",
      lowestPrice: "",
      stockStatus: "",
      sellFrom: "",
      shippingOrigin: ""
    };
    this.getProductInformation = this.getProductInformation.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.getProductInformation();
  }

  getProductInformation() {
    axios.get(`api/items/${this.state.productId}`)
      .then(({ data }) => {
        this.setState({
          name: data.name,
          starRatings: data.reviewRate,
          reviewsQuantity: data.reviewNum,
          questionsQuantity: data.questionNum,
          answersQuantity: data.answersNum,
          stockQuantity: data.stockAmount,
          sellLimit: data.sellLimit,
          lowestPrice: data.lowestPrice,
          stockStatus: data.stockStatus, //1 or 0, 1 for true & 0 for false
          sellFrom: data.sellFrom,
          shippingOrigin: data.shipOrigin
        });
      })
      .catch(err => console.error(err));
  }

  // handleClick(){

  // }


  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1>{this.state.name}</h1>
          </Col>
        </Row>
        <Row className="productSubTitle">
          <Col>Rating: {this.state.starRatings} ({this.state.reviewsQuantity})</Col>
          <Col>Write a Review</Col>
          <Col>See ({this.state.questionsQuantity}) Questions | ({this.state.answersQuantity}) Answers</Col>
        </Row>
        <Row>
          <Col>
            <hr/>
          </Col>
        </Row>
        <Row>
          <Col>
            {this.state.stockStatus === 1 ? "In Stock. " : "Out of Stock. "}
            Limit {this.state.sellLimit} per customer. ships from {this.state.sellFrom}
          </Col>
        </Row>
        <Row>
          <Col>
            Sold and Shipped By {this.state.shippingOrigin}
          </Col>
        </Row>
        <Row>
          <Col>
            <hr/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ProductHeaderInformation;
