import React from "react";

class TwitterMessage extends React.Component {
  state = {
    currentInput: "",
    maxChars: 280
  }

  getCharCount = (e) => {
    this.setState({ 
      currentInput: e.target.value,
      maxChars: 280 - e.target.value.length
    })
  }


  render() {
    console.log(this.state)
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" onChange={event => this.getCharCount(event)}id="message" value={this.state.currentInput} />
        <p>{this.state.maxChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
