import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Crud from "../services/Crud";

class Main extends React.Component {
  constructor() {
    super();
    }
    componentDidMount() {
        console.log(Crud);
        Crud.getData();
    }
  render() {
    return (
      <div>
        <Header />
        <div>Main Component</div>
        <Footer />
      </div>
    );
  }
}

export default Main;
