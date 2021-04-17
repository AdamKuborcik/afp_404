import {EventEmitter} from 'events';
import dispatcher from "../dispatcher/BookDispatcher";
import * as ActionConstans from "../dispatcher/ActionConstans";

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

dispatcher.register(({action,payload})=>{
    console.log({action : action, payload : payload});
    if(action !== ActionConstans.showError){
        return;
    }
    store._errorMsg = payload;
    store.emitChange();
});

dispatcher.register(({action})=>{
    if(action !== ActionConstans.clearError) return;
    store._errorMsg = "";
    store.emitChange();
});