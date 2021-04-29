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

class ModifyBook extends React.Component {
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



}

export default ModifyBook