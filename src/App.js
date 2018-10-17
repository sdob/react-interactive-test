import React, { Component } from 'react';
import Interactive from 'react-interactive';

import './App.css';

class App extends Component {

  state = {
    lastClickType: 'nothing',
  }

  handleClick = (event, clickType) => {
    this.setState({ lastClickType: clickType });
  }

  render() {
    return (
      <div className="app">
        <div>
          <Interactive
            as="div"
            onClick={this.handleClick}
          >
            Click me
          </Interactive>
        </div>

        <div className="message">
          last clickType: {this.state.lastClickType}
        </div>
      </div>
    );
  }
}

export default App;
