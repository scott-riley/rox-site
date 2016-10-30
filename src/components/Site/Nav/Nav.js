import React, {Component} from "react";
import {Link} from 'react-router';

import Btn from 'components/Global/Btn/Btn';
import Wrapper from 'components/Global/Wrapper/Wrapper';

import s from './Nav.css'

export default class Nav extends Component {
  render() {
    return (
      <nav className={s.root}>
        <Wrapper>
          <h1 className={s.logo}>
            <Link to="/">
              <span className={s.emoji}>🦄</span> Roxie Ablett
            </Link>
          </h1>
          <div className={s.links}>
          </div>
          <div className={s.links}>
            <Link to="/services">Things I do</Link>
            <Link to="/portfolio">Things I’ve done</Link>
            <Link to="#">Let’s Be Friends</Link>
          </div>
        </Wrapper>
      </nav>
    )
  }
}
