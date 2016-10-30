import React, {Component} from "react";
import {Motion, spring} from 'react-motion';
import {Link} from 'react-router';

import Btn from 'components/Global/Btn/Btn';
import Wrapper from 'components/Global/Wrapper/Wrapper';

import Hero from 'components/Site/Hero/Hero';

import s from './Homepage.css';
import m from 'global/modifiers';

export default class Homepage extends Component {
  render() {
    return(
      <div id="homepage" className={s.root}>
        <Motion
        defaultStyle={{faceY: 5, copyY: -5}}
        style={{
          faceY: spring(0, {stiffness: 120, damping: 7}),
          copyY: spring(0, {stiffness: 80, damping: 7}),
        }}>
        { value =>
          <div className={s.wrap}>
            <div className={s.face} style={{transform: `translateY(${value.faceY}vh)`}}>
              <img src="images/face.jpg" />
            </div>
            <div className={s.copy} style={{transform: `translateY(${value.copyY}vh)`}}>
              <h1 className={s.heading}>
                Hiya, I’m Roxie.
              </h1>
              <h2 className={s.subhead}>
                I like playing with words and making&nbsp;people look cool.
              </h2>
              <p className={s.introPara}>
                I specialise in web-copy, blog posts and articles, and audio transcriptions. I’m also a bookworm with an obsession with folk and fairy tales.
              </p>
              <p className={s.introPara}>
                Why not <Link to="/services" className={s.link}>see what I do</Link>, <Link to="/services" className={s.link}>check out my work</Link> or follow me on <a href="http://twitter.com/roxalox88" className={s.link}>Twitter</a>?
                <Link className={s.cta} to="/hire">Let’s be friends</Link>
              </p>
            </div>
          </div>
        }
        </Motion>
      </div>
    )
  }
}
