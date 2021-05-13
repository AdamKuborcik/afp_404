import React , { Component } from 'react'
import {Formik} from "formik";
import * as Yup from "yup";
import {AddBook} from "../../actions/AddBook";

export const AddBookPage  = () => (   <body  className="App-body"><div><Formik
    initialValues={{author: "",title: "", genre:""}}
    onSubmit={(values, {setSubmitting}) => {
        setTimeout(() => {
            console.log(values)
            AddBook(values);
            setSubmitting(false);
        }, 1000);
    }}

    validationSchema={Yup.object().shape({
        author: Yup.string()
            .required(),
        title: Yup.string()
            .required(),
        genre: Yup.string()
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

                    <label htmlFor="author">Author's name:</label>
                    <input
                        name="author"
                        type="text"
                        placeholder="Author Name"
                        value={values.author}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={ errors.author && touched.author ? "form-control is-invalid" : "form-control"}
                    />
                    {errors.author && touched.author && (
                        <div className={"invalid-feedback"}>{errors.author} </div>
                    )}


                    <label htmlFor="title">Title:</label>
                    <input
                        name="title"
                        type="text"
                        placeholder="Book Title"
                        value={values.title}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.title && touched.title ? "form-control is-invalid" : "form-control"}
                    />
                    {errors.title && touched.title && (
                        <div className={"invalid-feedback"}>{errors.title}</div>
                    )}


                    <label htmlFor="genre">Genre:</label>
                    <input
                        name="genre"
                        type="text"
                        placeholder="Genre of Book"
                        value={values.genre}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.genre && touched.genre? "form-control is-invalid" : "form-control"}
                    />
                    {errors.genre && touched.genre && (
                        <div className={"invalid-feedback"}>{errors.genre}</div>
                    )}

                <button type="submit" disabled={isSubmitting} className={"btn btn-primary"}>
                    Add Book
                </button>
            </form>
        );
    }}
</Formik></div> </body>);