import React, { Component } from 'react';

class EventPractice extends Component {
  state = {
    username: '',
    message: ''
  };

  handleChange = e => {
    if (this) {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  };

  handleClick = () => {
    console.log(this);
    alert(this.state.username + ': ' + this.state.message);
    this.setState({
      username: '',
      message: ''
    });
  };

  handleKeyPress = e => {
    if (e.key === 'Enter') this.handleClick();
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="송타"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="하이하이"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />

        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
