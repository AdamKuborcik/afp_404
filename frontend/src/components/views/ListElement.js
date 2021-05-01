import React from 'react'
import ModifyElement from "./ModifyElement";
import DeleteElement from "./DeleteElement";

class ListElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            element: {
                id: this.props.id,
                name: this.props.author,
                address: this.props.title,
                birthDate: this.props.genre
            }
        }
    }

    render() {
        return (
            <div className={"col pb-5"}>
                <div className={"card text-center"}>
                    <div className={"card-header"}>
                        Employee #ID: {this.state.element.id}
                    </div>
                    <div className={"card-body"}>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm">
                                    <h5 className={"card-title"}>{this.state.element.author}</h5>
                                </div>
                                <div className="col-sm">
                                    <p className={"card-text"}>{this.state.element.title}</p>
                                </div>
                                <div className="col-sm">
                                    <DeleteElement deleteID={this.state.element.id} title={this.state.element.title}/>
                                </div>
                                <div className="col-sm">
                                    <ModifyElement title={this.state.element.title} author={this.state.element.author}
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