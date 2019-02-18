import React from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

class ProductOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: 2,
      categoryId: [],
      category: [],
      options: []
    };
    this.getCategoryNames = this.getCategoryNames.bind(this);
    this.getOptions = this.getOptions.bind(this);
  }
  componentDidMount() {
    this.getCategoryNames();
    setTimeout(() => this.getOptions(), 0);
  }

  getCategoryNames() {
    axios
      .get(`api/category/${this.state.productId}`)
      .then(({ data }) => {
        this.setState({
          category: data.map(name => name.categoryName),
          categoryId: data.map(catID => catID.id)
        });
      })
      .catch(err => console.error(err));
  }

  getOptions() {
    axios.get(`api/option_categories/${this.state.categoryId.map(id => id)}`)
      .then(({ data }) => {
        this.setState({
          options: data.map(option => option.options)
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <Container>
        {this.state.category.map(name => (
          <Row>
            <Col>{`${name}: `}</Col>
          </Row>
        ))}
        <Row>
          <Col>
            <ButtonToolbar>
              {this.state.options.map(item => (
                <Button variant="secondary">{item}</Button>
              ))}
            </ButtonToolbar>
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

export default ProductOptions;
