import React from 'react';
import DeleteBookPage from "./DeleteBookPage";
import ModifyBookPage from "./ModifyBookPage";

class ListElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            element: {
                id: this.props.id,
                author: this.props.title,
                title: this.props.author,
                genre: this.props.genre
            }
        }
    }

    render() {
        return (
            <div className={"col pb-5"}>
                <div className={"card text-center"}>
                    <div className={"card-header"}>
                        Book #ID: {this.state.element.id}
                    </div>
                    <div className={"card-body"}>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm">
                                    <h5 className={"card-title"}>{this.state.element.title}</h5>
                                </div>
                                <div className="col-sm">
                                    <p className={"card-text"}>{this.state.element.author}</p>
                                </div>
                                <div className="col-sm">
                                    <p className={"card-text"}>{this.state.element.genre}</p>
                                </div>

                                <div className="col-sm">
                                    <DeleteBookPage deleteID={this.state.element.id} />
                                </div>
                                <div className="col-sm">
                                    <ModifyBookPage title={this.state.element.title} author={this.state.element.author}
                                                   genre={this.state.element.genre}
                                                   modifyID={this.state.element.id}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default ListElement