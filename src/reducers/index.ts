import myTargetReducer from "./myTarget"
import { combineReducers } from "redux"

const rootReducer = combineReducers({
    myTarget : myTargetReducer
})

export default rootReducer;