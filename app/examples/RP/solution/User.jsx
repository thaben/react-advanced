import { Component } from "react";

class User extends Component {
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
    return this.props.children(this.state.user);
  }
}

export default User;
