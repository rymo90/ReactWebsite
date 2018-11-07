import React from "react";
class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: " This is Image"
    };
  }
  render() {
    return <div>{this.state.name}</div>;
  }
}
export default Image;
