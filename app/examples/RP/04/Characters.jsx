import { Component } from "react";

class Characters extends Component {
  state = {
    data: [],
    isLoading: true,
  };

  componentDidMount() {
    const { url, resource, format } = this.props;

    fetch(`${url}/${resource}?format=${format}`)
      .then((res) => res.json())
      .then((characters) => this.setState({ data: characters, isLoading: false }));
  }

  render() {
   const { data, isLoading } = this.state; //edw gt bainei auto, bainei gt fortwnei o loader
   //pou einai true k otan epistrepsoun ta dedomena tha ginei false k prepei na allaksei otan allaksei to state

    return this.props.render(data, isLoading);
  }
}

export default Characters;
