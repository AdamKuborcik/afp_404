import {EventEmitter} from 'events';
import dispatcher from "../dispatcher/BookDispatcher";
import {refresh} from '../dispatcher/ActionConstans';

class ErrorStore extends EventEmitter{
    _errorMsg = "";

    emitChange(){
        this.emit('Change');
    }

    addOnChangeListener(callback){
        this.addListener('Change', callback);
    }

    removeOnChangeListener(callback){
        this.removeListener('Change',callback);
    }

}
const store = new ErrorStore();
export default store;

