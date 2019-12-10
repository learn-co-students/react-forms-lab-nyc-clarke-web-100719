import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweet: "",
    };
  }

  handleChange = event => {
    this.setState({
      tweet: event.target.value,
    })
  }



  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" maxLength={this.props.maxChars} value={this.state.tweet} onChange={this.handleChange} />
        <p>{this.props.maxChars - this.state.tweet.length} Left!</p>
      </div>
    );
  }
}

export default TwitterMessage;
