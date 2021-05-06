import {EventEmitter} from 'events'
import BookDispatcher from "../dispatcher/BookDispatcher";
import {refresh} from '../dispatcher/ActionConstans';

class BookStore extends EventEmitter {
    _Books = [];

    emitChange(){
        this.emit('Change');
    }

    addChangeListener(callback){
        this.addListener('Change',callback);
    }

    removeChangeListener(callback){
        this.removeListener('Change',callback);
    }
}

const store = new BookStore();
export default store;

BookDispatcher.register(({action,payload})=>{
    if(action !== refresh ) return;
    store._Books = payload;
    store.emitChange();
})