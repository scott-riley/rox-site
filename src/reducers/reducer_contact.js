import {INITIAL_STATE} from './index';

import {SEND_MESSAGE} from 'actions/index';

export default function(state = INITIAL_STATE.contact, action) {
  switch(action.type) {
    case SEND_MESSAGE:
      console.log("ACTION", action.payload);
      if(action.payload.status == 200) {
        return { status: 'success' }
      }
      else {
        return { status: 'fail' }
      }
      return state;
    default:
      return state;
  }
}
