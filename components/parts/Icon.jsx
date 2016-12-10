import React, { Component, PropTypes } from 'react';

export default class Footer extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
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
      <i className={`hi hi-${this.props.name}`} />
    );
  }
}
