import React from "react";
import ReactDOM from "react-dom";
import ProductImage from "./components/ProductImage"
import ProductHeaderInformation from "./components/ProductHeaderInformation"
import ProductOptions from "./components/ProductOptions"
import ProductFooterInformation from "./components/ProductFooterInformation"
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
        <ProductImage/>
        {/* <ProductFooterInformation/> */}
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById("app"));