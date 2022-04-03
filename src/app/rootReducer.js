import {combineReducers} from 'redux';
import authReducer from '../features/auth/authSlide';
import bookReducer from '../features/todoSlide/todoSlide';
import scheduleReducer from '../features/scheduleSlide/scheduleSlide';
import attendaceReducer from '../features/scheduleSlide/AttendanceSlide';
import infoUserReducer from '../features/reducer/infoUser';
import smsReducer from '../features/reducer/sms';
import pointReducer from '../features/reducer/pointSubject';
import testReducer from '../features/scheduleSlide/TestSlide';
import tuitionReducer from '../features/reducer/TuitionSlide';
import transactionReducer from '../features/reducer/transaction';
import postsReducer from '../features/reducer/postSlide';

const rootReducer = combineReducers({
  books: bookReducer,
  auths: authReducer,
  schedules: scheduleReducer,
  attendances: attendaceReducer,
  infoUser: infoUserReducer,
  smsUser: smsReducer,
  point: pointReducer,
  test: testReducer,
  tuitions: tuitionReducer,
  transaction: transactionReducer,
  posts: postsReducer,
});
export default rootReducer;
