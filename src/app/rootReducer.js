import { combineReducers } from "redux";
import authReducer from "../features/auth/authSlide";
import bookReducer from "../features/todoSlide/todoSlide";
import scheduleReducer from "../features/scheduleSlide/scheduleSlide"
const rootReducer = combineReducers({
    books: bookReducer,
    auths: authReducer,
    schedules: scheduleReducer
});
export default rootReducer;