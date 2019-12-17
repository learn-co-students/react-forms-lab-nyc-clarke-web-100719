import React from "react";

class TwitterMessage extends React.Component {
  state ={
    numChars: 0,
    textVal: ""
  }
  change = (e) => {
    this.setState({
      numChars: e.target.value.length,
      textVal: e.target.value
    },console.log (this.state))
    
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.change} value={this.state.textVal} />
        <h6>{this.props.maxChars - this.state.numChars} character(s) remaining</h6>
      </div>
    );
  }
}

export default TwitterMessage;
