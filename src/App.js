import React from 'react';
import './style.css';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initial: 1000,
      timer: 120,
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
    if (!this.state.pauseTime) {
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
// var Timer = function(callback, delay) {
//   var timerId, start, remaining = delay;

//   this.pause = function() {
//       window.clearTimeout(timerId);
//       remaining -= Date.now() - start;
//   };

//   this.resume = function() {
//       start = Date.now();
//       window.clearTimeout(timerId);
//       timerId = window.setTimeout(callback, remaining);
//   };

//   this.resume();
// };

// var timer = new Timer(function() {
//   alert("Done!");
// }, 1000);

// timer.pause();
// // Do some stuff...
// timer.resume()
