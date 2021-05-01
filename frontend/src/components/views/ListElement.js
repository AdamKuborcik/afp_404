import React from 'react';

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


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListElement