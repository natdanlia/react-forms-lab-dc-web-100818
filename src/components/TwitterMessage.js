import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      msg: ''
    };
  }

  handleInput = (event) => {

    this.setState({
      msg: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value = {this.state.msg} onChange = {this.handleInput}/>
        <strong>Remaining Characters:{this.props.maxChars - this.state.msg.length}</strong>
      </div>
    );
  }
}

export default TwitterMessage;
