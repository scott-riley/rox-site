import React, {Component} from 'react';
import {Link} from 'react-router';

import s from './Services.css';

import Wrapper from 'components/Global/Wrapper/Wrapper';
import Btn from 'components/Global/Btn/Btn';

export default class Services extends Component {
  render() {
    const {children} = this.props;
    return (
      <div className={s.root}>
        <Wrapper>
          <h1 className={s.heading}>Things I do</h1>
        </Wrapper>

        <div className={s.section}>
          <Wrapper>

            <h2 className={s.serviceHeader}><span className={s.number}>1.</span> Word-playing</h2>
            <p className={s.serviceOverview}>
              Words can and should be played with, but sometimes it’s easier said than done. Playing with words is one of my most favourite things to do and people say I’m pretty good at it.
            </p>
            <div className={s.subSection}>
              <div className={s.subService}>
                <h3>Web Copy</h3>
                <p>
                  Even seasoned professionals struggle to showcase case their personality and what they do best. I can inject some of you into your business’ copy.
                </p>
              </div>
              <div className={s.subService}>
                <h3>Blog posts <span className={s.amp}>&amp;</span> Articles</h3>
                <p>
                  I research, write, edit, and proofread posts and articles about almost anything. They don’t even have to have my name attached.
                </p>
              </div>
              <div className={s.subService}>
                <h3>Ghost writing</h3>
                <p>
                  This includes anything from online articles to social media posts, as well as all things creative. Let’s make magic happen.
                </p>
              </div>
            </div>

            <h2 className={[s.serviceHeader, s.blue].join(' ')}><span className={s.number}>2.</span> Word-fixing</h2>
            <p className={s.serviceOverview}>
              I know things about grammar that no human should, especially if that human wants to enjoy social media sites.
            </p>
            <div className={s.subSection}>
              <div className={[s.subService, s.blue].join(' ')}>
                <h3>Copy editing</h3>
                <p>
                  If you’ve written your own copy and need help making it sound great, or just want to spruce up some old copy, I can help you.
                </p>
              </div>
              <div className={[s.subService, s.blue].join(' ')}>
                <h3>Proofreading</h3>
                <p>
                  Let me be your human spellchecker and grammar-master.
                </p>
              </div>
              <div className={[s.subService, s.blue].join(' ')}>
                <h3>Book editing</h3>
                <p>
                  Let me edit your book and make our wildest dreams come true.
                </p>
              </div>
            </div>

            <h2 className={[s.serviceHeader, s.blue].join(' ')}><span className={s.number}>3.</span> Transcription</h2>
            <p className={s.serviceOverview}>
              I have lots of experience with technical and non-technical transcriptions. I’ll transcribe anything – podcasts, interviews, videos, the lot!
            </p>

            <div className={s.cta}>
              <Link to="/hire" className={s.btn}>Let’s be friends</Link>
            </div>

          </Wrapper>
        </div>
      </div>
    );
  }
}
