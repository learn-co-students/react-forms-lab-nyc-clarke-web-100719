import React, {Component} from "react";

class TwitterMessage extends Component {
  state = {
    message: ''
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleInputChange} value={this.state.message} />
        <span>{this.props.maxChars - this.state.message.length} left</span>
      </div>
    );
  }
}

export default TwitterMessage;
