import React, { Component, PropTypes } from 'react';

import Head from 'parts/Head';
import Footer from 'parts/Footer';

import Config from 'Config';

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
        <Footer />
      </div>
    );
  }
}
