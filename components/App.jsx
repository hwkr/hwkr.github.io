import React, { Component, PropTypes } from 'react';

import '../styles/main.less';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    routes: PropTypes.array.isRequired,
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
      <div>
        {this.props.children}
      </div>
    );
  }
}
