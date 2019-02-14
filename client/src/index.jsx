import React from "react";
import ReactDOM from "react-dom";
import productImage from "./components/productImage"
import productHeaderInformation from "./components/productHeaderInformation"
import productOptions from "./components/productOptions"
import productFooterInformation from "./components/productFooterInformation"
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  componentDidMount(){
    // GET request for productImages, productOptions, productHeaderInformation, productFooterInformation
    // productImages; mouseOverZoom(), image tiles w/ mouseOver()
    // productHeaderInformation; title, share button (w/ social media icons), star rating reviews, Q&A #
    // productOptions; product varying options
    // productFooterInformation; descriptions
  }

  render() {
    return (
      <div>
        <h1>Work in Progress</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));