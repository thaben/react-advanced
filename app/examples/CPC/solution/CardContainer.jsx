import React, { Component } from "react";
import Card from "./Card";

class CardContainer extends Component {
  state = {
    user: null,
  };

  componentDidMount() {
    fetch("http://localhost:3001/user")
      .then((res) => res.json())
      .then((user) => {
        this.setState({ user });
      });
  }

  render() {
    const { title } = this.props;
    const { user } = this.state;

    return <Card title={title} user={user} />;
  }
}

export default CardContainer;
