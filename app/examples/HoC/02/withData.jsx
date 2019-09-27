import React, { Component } from "react";

const withData = (WrappedComponent) => { // einai mia function pou pernei auto to component ftiaxnei mia klasi k gurnaei mia klasi, gurnaei ena component. Einai kanoniko componnent gt exei state 
  class withDataComponent extends Component {
    state = {
      data: [],
    };

    componentDidMount() {
      fetch("http://localhost:3001/characters")
        .then((res) => res.json())
        .then((characters) => this.setState({ data: characters }));
    }

    render() {
      return <WrappedComponent {...this.state} {...this.props} />; //  to this.state einai ta data k ta rendarw . to props einai gia ta idi uparxon props .
    }
  }

  return withDataComponent;
};

export default withData;
