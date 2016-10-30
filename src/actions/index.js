import axios from 'axios';

export const SEND_MESSAGE = 'SEND_MESSAGE';

const HMU_URL = 'http://api.hmu.cool/messages/03c0b598ac611f0fbae7fa5b2b5349d5';

export function sendMessage(props) {
  const {email, name, details} = props;
  const requestData = {
    email: email,
    fields: {
      name: name,
      details: details,
    }
  };

  const request = axios.post('http://api.hmu.cool/messages/03c0b598ac611f0fbae7fa5b2b5349d5', requestData);

  return {
    type: SEND_MESSAGE,
    payload: request,
  }
}
