import React, { Component /* , PropTypes */ } from 'react';

export default class Footer extends Component {
  static propTypes = {
  }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  // static defaultProps = {
  // }

  render() {
    return (
      <footer>
        <p>&copy; Copyright 2016 Brynn Hawker</p>
      </footer>
    );
  }
}
