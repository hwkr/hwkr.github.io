import React, { Component, PropTypes } from 'react';

import Head from 'parts/Head';

import Config from 'Config';

import '../styles/main.less';

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
        <Head />
        {this.props.children}
      </div>
    );
  }
}
