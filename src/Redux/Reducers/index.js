import { combineReducers } from 'redux';
import requestReducer from './reqestReducer'
// import applicationReducer from './applicationReducer'

export default combineReducers({
    activeRequest: requestReducer,
    // userRequest:

    // user: userReducer
})