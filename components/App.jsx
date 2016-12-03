import React, { Component, PropTypes } from 'react';

import Config from 'Config';

import '../styles/main.less';
import '../img/favicon.png';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    routes: PropTypes.array.isRequired,
  }


  constructor(props) {
    super(props);
    console.log(...Config.console_cats); // eslint-disable-line no-console
    this.state = {
    };
  }

  // static defaultProps = {
  // }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
