import {EventEmitter} from 'events';
import dispatcher from "../dispatcher/BookDispatcher";
import {refresh} from '../dispatcher/ActionConstans';

class ErrorStore extends EventEmitter{


}
const store = new ErrorStore();
export default store;

