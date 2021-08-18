import React from "react";
import Category from "./components/Category/Category";
import Header from "./components/Header/Header";
import "./main.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { categoriesQuery, currenciesQuery } from "./query";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      currencies: [],
    };
  }

  async componentDidMount() {
    const categoryData = await axios.post("http://localhost:4000/graphql", {
      query: categoriesQuery,
    });

    const currencyData = await axios.post("http://localhost:4000/graphql", {
      query: currenciesQuery,
    });

    this.setState({
      categories: categoryData.data.data.categories,
      currencies: currencyData.data.data.currencies,
    });
  }
  render() {
    return (
      <>
        <Header
          category={this.state.categories}
          currency={this.state.currencies}
        />
        <Switch>
          <Category />
        </Switch>
      </>
    );
  }
}

export default App;
