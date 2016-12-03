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
      <div className="home">
        <main className="hero">
          <div>
            <h1>
              Hi! I&apos;m Brynn
              <br />
              <small>
                It's nice to meet you!
              </small>
            </h1>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}
