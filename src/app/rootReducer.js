import { combineReducers } from "redux";
import authReducer from "../features/auth/authSlide";
import bookReducer from "../features/todoSlide/todoSlide";
import scheduleReducer from "../features/scheduleSlide/scheduleSlide"
import attendaceReducer from "../features/scheduleSlide/AttendanceSlide"
import infoUserReducer from "../features/reducer/infoUser"
import smsReducer from '../features/reducer/sms'
const rootReducer = combineReducers({
    books: bookReducer,
    auths: authReducer,
    schedules: scheduleReducer,
    attendances:  attendaceReducer,
    infoUser : infoUserReducer,
    smsUser: smsReducer
});
export default rootReducer;