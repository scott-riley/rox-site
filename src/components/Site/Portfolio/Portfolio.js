import React, {Component} from 'react';
import {Link} from 'react-router';

import Wrapper from 'components/Global/Wrapper/Wrapper';
import Btn from 'components/Global/Btn/Btn';

import s from './Portfolio.css';

export default class Portfolio extends Component {
  render() {
    const {children} = this.props;
    return (
      <div id="portfolio" className={s.root}>
        <Wrapper>
          <h1 className={s.heading}>Things I’ve done</h1>
        </Wrapper>

        <div className={s.portfolioItem}>
          <div className={s.portfolioImage}>
            <img src="images/face.jpg" />
          </div>
          <div className={s.portfolioContent}>
            <h1 className={s.portfolioHeading}>
              Bleach Collective Magazine
            </h1>
            <h2 className={s.subhead}>
              I like playing with words and making&nbsp;people look cool.
            </h2>
            <p className={s.introPara}>
              I specialise in web-copy, blog posts and articles, and audio transcriptions.
            </p>
            <p className={s.introPara}>
              I’m also a bookworm with an obsession with folk and fairy tales.
              <Link to="#" className={s.cta}>Case study</Link>
            </p>
          </div>
        </div>

      </div>
    );
  }
}
