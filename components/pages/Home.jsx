import React, { Component } from 'react';

import Icon from 'parts/Icon';

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
            <br />
            <button className="btn btn-primary btn-fat">
              <Icon name="social-facebook-messenger-bubble" size={1.3} /> Talk to me right meow
            </button>
          </div>
        </main>
      </div>
    );
  }
}
