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
          Hi.
          <ul className="list-inline">
            <li>Y</li>
            <li>E</li>
            <li>S</li>
          </ul>
        </main>
        <Footer />
      </div>
    );
  }
}
