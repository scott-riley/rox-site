import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ContactReducer from './reducer_contact';

export const INITIAL_STATE = {
  contact: {

  }
}

const rootReducer = combineReducers ({
  contact: ContactReducer,
  form: formReducer,
});

export default rootReducer;
