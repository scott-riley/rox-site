import React, {Component, PropTypes} from "react";

import s from './Hero.css';

export default class Hero extends Component {
  render() {
    const {children, className} = this.props;
    return (
      <div className={[s.root, className].join(' ')}>
        {children}
      </div>
    )
  }
}
