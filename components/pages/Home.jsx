import React, { Component } from 'react';

import Footer from '../parts/Footer';

export default class Home extends Component {
  // static propTypes = {
  // }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  // static defaultProps = {
  // }

  render() {
    return (
      <div>
        <main>
          Hi. It works!
        </main>
        <Footer />
      </div>
    );
  }
}
