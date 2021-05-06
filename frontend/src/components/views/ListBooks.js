
import React from 'react'
import ListElement from "./ListElement";
import {GetBooks} from '../../actions/GetBooks';
import BookStore from "../../store/BookStore";

class ListBooks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        }
        this._updateState = this._updateState.bind(this);
        this.componentDidMount = this.componentDidMount(this);
    }

    componentDidMount() {
        BookStore.addChangeListener(this._updateState);
        GetBooks();
    }

    componentWillUnmount() {
        BookStore.removeChangeListener(this._updateState);
        GetBooks();
    }

    _updateState() {
        this.setState({books: BookStore._Books});
    }

    render() {
        return (
            <body  className="App-body">
            <div>
                {this.state.books.map(({_id, author, title, genre}, index) => {
                    return (
                        <ListElement _id={_id} author={author} title={title} genre={genre}/>
                    );
                })}
            </div>
            </body>
        )
    }
}

export default ListBooks