import { combineReducers } from 'redux'

import contactUsReducer from './ContactUs/ContactUs.reducer'
import modalReducer from './Modal/Modal.reducer'

const rootReducer = combineReducers({
  contactUsReducer,
  modalReducer
})

export default rootReducer
