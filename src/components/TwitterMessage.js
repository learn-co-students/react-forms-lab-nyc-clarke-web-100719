import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      inputVal: ""
    };
  }

  handleChange = (event) => {
    this.setState({
        inputVal: event.target.value
    })
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"
               name="message"
               id="message"
               onChange={this.handleChange}
               value={this.state.inputVal}
               maxLength={this.props.maxChars}
        />
        {280 - this.state.inputVal.length}
        <h1>{this.state.inputVal}</h1>
      </div>
    );
  }
}

export default TwitterMessage;
