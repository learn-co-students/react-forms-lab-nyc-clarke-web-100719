import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      charLeft: props.maxChars
    };
  }

// handle Change && unexpected behavior as it change when paste content it, will only count as one eventchange.
  handleChange = event =>{
    console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value,
      charLeft: this.state.charLeft - 1
    })
  }

  render() {
    return (
      <div>
  <strong>Your message: {this.state.charLeft} chars left</strong>
        <input type="text" name="message"  value={this.state.message} onChange={this.handleChange} id="message" />
      </div>
    );
  }
}

export default TwitterMessage;
