import React, {Component} from 'react';
import {Link} from 'react-router';
import {bindActionCreators} from 'redux';
import {reduxForm} from 'redux-form';
import {sendMessage} from 'actions/index';

import Btn from 'components/Global/Btn/Btn';

import s from './Hire.css';

class Hire extends Component {

  render() {
    const {handleSubmit, fields: {email, name, details}, contact, submitting } = this.props;
    return (
      <div id="hire">
        { contact.status == 'success' ?
            <div className={s.success}>
              <h1 className={s.heading}>Thanks!</h1>
              <p className={s.thanks}>I’ll be in touch soon and we can make lovely word babies.</p>
            </div>
          :
            <div>
              <h1 className={s.heading}>Let’s be friends</h1>
              <div className={ submitting ? s.submitting : null} >
                <form className={s.hireForm} onSubmit={handleSubmit(this.props.sendMessage)}>
                  <div className={s.formGroup}>
                    <label htmlFor="name" className={s.label}>What’s your name, friend?</label>
                    <input className={s.input} placeholder="Lovely Client" type="text" id="name" {...name} />
                  </div>
                  <div className={s.formGroup}>
                    <label htmlFor="email" className={s.label}>And what’s your email?</label>
                    <input className={s.input} placeholder="hugs@lovelyclient.com" type="email" id="email" {...email} />
                  </div>
                  <div className={s.formGroup}>
                    <label htmlFor="name" className={s.label}>What’s going on in that wonderful brain of yours?</label>
                    <p className={s.helper}>Here’s where you tell me all the wonders of your lovely project.</p>
                    <input className={[s.input, s.textarea].join(' ')} placeholder="I want you to write great words for…" id="details" {...details} />
                  </div>
                  <div className={s.cta}>
                    <Btn modifier="big">Let’s make magic happen</Btn>
                  </div>
                </form>
              </div>
            </div>
        }
      </div>
    );

  }
}

function mapStateToProps(state) {
  return {
    contact: state.contact
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    sendMessage: sendMessage
  }, dispatch);
}

export default reduxForm({
  form: 'ContactForm',
  fields: ['name', 'email', 'details']
}, mapStateToProps, mapDispatchToProps)(Hire);
