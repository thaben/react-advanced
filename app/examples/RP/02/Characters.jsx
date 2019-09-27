import { Component } from "react";

class Characters extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    fetch("http://localhost:3001/characters")
      .then((res) => res.json())
      .then((characters) => this.setState({ data: characters }));
  }

  render() {
    return this.props.renderAll(this.state.data); //pernaei to current state autou to component
  }
}

export default Characters;
