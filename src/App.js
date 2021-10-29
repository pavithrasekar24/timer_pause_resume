import React from 'react';
import './style.css';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initial: 1000,
      timer: 10,
      pauseTime: false,
      resumeTime: true,
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.reducetimer();
    }, this.state.initial);
  }
  reducetimer = () => {
    if (!this.state.pauseTime && this.state.timer !== 0) {
      this.setState({ timer: this.state.timer - 1 });
    } else {
      clearInterval();
    }
  };
  handlePause = () => {
    this.setState({ pauseTime: true, resumeTime: false });
  };
  handleResume = () => {
    this.setState({ pauseTime: false, resumeTime: true });
  };
  render() {
    return (
      <div>
        <h1>Hello StackBlitz!</h1>
        <p>Start editing to see some magic happen :)</p>
        <p>{this.state.timer}</p>
        <button onClick={this.handlePause} disabled={this.state.pauseTime}>
          Pause
        </button>
        <button onClick={this.handleResume} disabled={this.state.resumeTime}>
          Resume
        </button>
      </div>
    );
  }
}
