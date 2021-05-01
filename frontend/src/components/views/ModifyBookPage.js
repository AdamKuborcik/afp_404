import React from 'react';
import ReactModal from 'react-modal';
import {Button} from "reactstrap";
import * as Yup from "yup";
import {Formik} from "formik";
import {ModifyBook} from "../../actions/ModifyBook";

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



class ModifyBookPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            user: {

                modifyID: this.props.modifyID,
                author: this.props.author,
                title: this.props.title,
                genre: this.props.genre

            }
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }


    handleOpenModal() {
        this.setState({showModal: true});
    }

    handleCloseModal() {
        this.setState({showModal: false});
    }

    render() {
        return (
           <body  className="App-body">
            <div>
                <Button onClick={this.handleOpenModal} className={"btn btn-success"}>Modify Book</Button>
                <ReactModal
                    isOpen={this.state.showModal}
                    ariaHideApp={false}
                    contentLabel="Add book"
                    style={customStyles}
                >
                    <div className="card-body text-center">
                        <h5 className="card-title">Modify book's data</h5>
                        <h6 className="card-subtitle mb-2 text-muted">#ID:{this.state.modifyID}</h6>
                        <Formik
                            initialValues={{
                                author: this.state.author, title: this.state.title,
                                genre:this.state.genre, modifyID: this.state.modifyID
                            }}
                            onSubmit={(values, {setSubmitting}) => {
                                setTimeout(() => {
                                    ModifyBook(values);
                                    this.setState({showModal: false})
                                    setSubmitting(false);
                                }, 500);
                            }}

                            validationSchema={Yup.object().shape({
                                author: Yup.string()
                                    .required(),
                                title: Yup.string()
                                    .required(),
                                genre: Yup.date()
                                    .required()
                            })}
                        >
                            {props => {
                                const {
                                    values,
                                    touched,
                                    errors,
                                    isSubmitting,
                                    handleChange,
                                    handleBlur,
                                    handleSubmit
                                } = props;
                                return (
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="id">ID</label>
                                            <input
                                                name="modifyID"
                                                type="text"
                                                placeholder="Book ID"
                                                value={values.modifyID}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={errors.modifyID && touched.modifyID? "form-control is-invalid" : "form-control"}
                                            />
                                            {errors.modifyID && touched.modifyID  && (
                                                <div className={"invalid-feedback"}>{errors.modifyID } </div>
                                            )}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="author">Author</label>
                                            <input
                                                name="author"
                                                type="text"
                                                placeholder="Author name"
                                                value={values.author}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={errors.author && touched.author? "form-control is-invalid" : "form-control"}
                                            />
                                            {errors.author && touched.author && (
                                                <div className={"invalid-feedback"}>{errors.author} </div>
                                            )}
                                        </div>
                                        <div className={"form-group"}>
                                            <label htmlFor="title">Title</label>
                                            <input
                                                name="title"
                                                type="text"
                                                placeholder="Title"
                                                value={values.title}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={errors.title && touched.title ? "form-control is-invalid" : "form-control"}
                                            />
                                            {errors.title && touched.title && (
                                                <div className={"invalid-feedback"}>{errors.title}</div>
                                            )}
                                        </div>
                                        <div className={"form-group"}>
                                            <label htmlFor="genre">Genre</label>
                                            <input
                                                name="genre"
                                                type="text"
                                                placeholder="Genre of book"
                                                value={values.genre}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={errors.genre && touched.genre ? "form-control is-invalid" : "form-control"}
                                            />
                                            {errors.genre && touched.genre && (
                                                <div className={"invalid-feedback"}>{errors.genre}</div>
                                            )}
                                        </div>
                                        <p className="card-text">This book will be modified!</p>
                                        <button type="submit" disabled={isSubmitting}
                                                className={"btn btn-success card-link"}>
                                            Modify
                                        </button>
                                        <button onClick={this.handleCloseModal} className={"btn btn-primary card-link"}>
                                            Cancel
                                        </button>
                                    </form>
                                );
                            }}
                        </Formik>
                    </div>
                </ReactModal>
            </div>
            </body>
        );
    }
}

export default ModifyBookPage