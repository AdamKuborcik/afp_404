import React from 'react';
import ReactModal from 'react-modal';
import {Button} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {DeleteBook} from "../../actions/DeleteBook";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

class DeleteBookPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            book: {
                deleteID: props.deleteID,

            },
            showModal: false
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleOpenModal() {
        this.setState({showModal: true});
    }

    handleCloseModal() {
        this.setState({showModal: false});
    }

    handleClick = (input) => {
        console.log('The link was clicked.');
        DeleteBook(input)
    }

    render() {
        return (
            <body  className="App-body">
            <div>
                <Button onClick={this.handleOpenModal} className={"btn btn-danger"}>Delete Book</Button>
                <ReactModal
                    ariaHideApp={false}
                    isOpen={this.state.showModal}
                    contentLabel="Delete book"
                    style={customStyles}
                >
                    <div>
                        <div className="card-body text-center">
                            <h5 className="card-title">Delete this book: {this.state.author}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">#ID:{this.state.title}</h6>
                            <p className="card-text">This book will be permanently deleted!</p>
                            <button onClick={() => this.handleClick(this.state.deleteID)} className={"btn btn-danger card-link"}>Delete
                            </button>
                            <button onClick={this.handleCloseModal} className={"btn btn-primary card-link"}>Cancel
                            </button>
                        </div>
                        <p>{this.state.deleteID}</p>
                    </div>
                </ReactModal>
            </div>
            </body>
        );
    }
}

export default DeleteBookPage