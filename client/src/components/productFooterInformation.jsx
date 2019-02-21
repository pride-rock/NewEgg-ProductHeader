import React from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class ProductFooterInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: 47,
      description: [],
      stockQuantity: "",
      lowestPrice: ""
    };
    this.getDescription = this.getDescription.bind(this);
    this.getProductInfo = this.getProductInfo.bind(this);
  }

  componentDidMount() {
    this.getDescription();
    this.getProductInfo();
  }

  getDescription() {
    axios
      .get(`http://localhost:3010/api/description/${this.state.productId}`)
      .then(({ data }) => {
        this.setState({ description: data });
      })
      .catch(err => console.error(err));
  }

  getProductInfo() {
    axios.get(`http://localhost:3010/api/items/${this.state.productId}`)
    .then(({ data }) => {
      this.setState({
        stockQuantity: data.stockAmount,
        lowestPrice: data.lowestPrice
      })
    })
    .catch(err => console.error(err))
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <ul>
              {this.state.description.map(bullet => (
                <li>{bullet.descriptionBullet}</li>
              ))}
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <a href="#">{this.state.stockQuantity} New</a> from <b>${this.state.lowestPrice}</b>
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

export default ProductFooterInformation;
