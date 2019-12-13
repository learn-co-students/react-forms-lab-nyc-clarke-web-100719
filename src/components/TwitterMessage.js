import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleChange = event => {
    this.setState({
      message: event.target.value
    })
  }

  remainingChars = () => {
    let charsRemain = this.state.message.length - this.props.maxChars
    return Math.abs(charsRemain)
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
          <input 
            type="text" 
            name="message"
            id="message" 
            value={this.state.message}
            onChange={this.handleChange}
          />
        Only {this.remainingChars()} of {this.props.maxChars} remain
      </div>
    );
  }
}

export default TwitterMessage;
