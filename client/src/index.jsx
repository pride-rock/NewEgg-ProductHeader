import React from "react";
import ReactDOM from "react-dom";
import ProductImage from "./components/ProductImage";
import ProductHeaderInformation from "./components/ProductHeaderInformation";
import ProductOptions from "./components/ProductOptions";
import ProductFooterInformation from "./components/ProductFooterInformation";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // product id to pass down to child components
    };
  }
  componentDidMount() {
    // request product id from URL when componentDidMount()

    // GET request for productImages, productOptions, productHeaderInformation, productFooterInformation
    // productImages; mouseOverZoom(), image tiles w/ mouseOver()
    // productHeaderInformation; title, share button (w/ social media icons), star rating reviews, Q&A #
    // productOptions; product varying options
    // productFooterInformation; descriptions
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <ProductImage/>
          </Col>
          <Col>
            <ProductHeaderInformation/>
            <ProductOptions/>
            <ProductFooterInformation/>
          </Col>
        </Row>
      </Container>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
