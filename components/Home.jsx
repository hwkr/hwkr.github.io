import React, { Component } from 'react';
import { Link } from 'react-router';

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
        <p>
          This is an example single page app built.
        </p>
        <div><Link to="/example">Example page</Link></div>
        <div><Link to="/example/two-deep?field1=foo&field2=bar#boom!">
          Example two deep with query and hash
      </Link></div>
      </div>
    );
  }
}
