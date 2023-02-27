import { combineReducers } from "redux";
import reducers from "./reducer"
import loginReducer from "./login/loginReducer"

const rootReducer = combineReducers({
    login: loginReducer,
    homepage: reducers
})

export default rootReducer;