import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';

import Header from './comps/header';
import Signup from './comps/signup';

class App extends PureComponent {
  constructor () {
    super()
    this.state = {

    }
  }

  render () {
    return (
      <div className="app-container">
        <Header />
        <Signup />
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById("root"))
