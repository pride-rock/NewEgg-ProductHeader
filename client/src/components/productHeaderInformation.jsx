import React from "react";
import axios from "axios";
import { aws } from "../../config.js";
// import {rateImg} from "../../assets"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

class ProductHeaderInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // productId: 47,
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
  }

  componentDidMount() {
    this.getProductInformation();
  }

  // pass states, product id into here soon to be `http://${aws}/api/items/${this.props.productID}`
  getProductInformation() {
    const idtag = window.location.href.split("/")[3] || 5;
    // axios.get(`http://localhost:3010/api/items/${this.state.productId}`)
    // axios.get(`http://localhost:3010/api/items/${idtag}`)
    // axios.get(`http://18.223.158.147/api/items/${idtag}`)
    axios
      .get(`http://${aws}/api/items/${idtag}`)
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
          stockStatus: data.stockStatus,
          sellFrom: data.sellFrom,
          shippingOrigin: data.shipOrigin
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <Container>
        <Row className="col-productName">
          <Col>
            <h1>{this.state.name}</h1>
          </Col>
        </Row>
        {/* formatting issue, text needs to be smaller */}
        <div className="row font-11px subTitle">
          <div
            className="col rating"
            style={{
              background: `url(//${aws}/assets/spr_${
                this.state.starRatings
              }.png) no-repeat`
            }}
          />
          <div>
            <div className="col">({this.state.reviewsQuantity})</div>
          </div>
          <div>
            <div className="col writeReview">Write a Review</div>
          </div>
          <div>
            <div className="col">
              See ({this.state.questionsQuantity}) Questions | (
              {this.state.answersQuantity}) Answers
            </div>
            {/* require share button a popover */}
          </div>
        </div>
        <Row>
          <Col className="target-spot">
            <hr />
          </Col>
        </Row>
        <Row>
          <Col className="font-13px">
            {this.state.stockStatus === 1 ? "In Stock. " : "Out of Stock. "}
            Limit {this.state.sellLimit} per customer. ships from{" "}
            {this.state.sellFrom}
          </Col>
        </Row>
        <Row>
          <Col className="font-13px">
            Sold and Shipped By {this.state.shippingOrigin}
          </Col>
        </Row>
        <Row>
          <Col>
            <hr />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ProductHeaderInformation;
