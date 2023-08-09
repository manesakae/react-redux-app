import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import addBookSchema from '../formValidatorSchema/addbookSchema';
import { useDispatch } from 'react-redux';
import { bookAdd } from '../reducers/booksSlice';
import { nanoid } from '@reduxjs/toolkit';

const initialFormValues = {
    title: "",
    author: "",
    price: 0
}

export default function AddBookWithFormikValidation() {
    const dispatch = useDispatch();
    return (
        <Formik
            initialValues={initialFormValues}
            validationSchema={addBookSchema}
            onSubmit={(values, { resetForm }) => {
                dispatch(bookAdd({ ...values, id: nanoid() }));
                resetForm();
            }}
        >
            {(formik) => {
                const { errors, touched, isValid, dirty } = formik;
                return (
                    <div>
                        <h5>Add Book With Formik Validation</h5>
                        <Form>
                            <div>
                                <label> Title
                                    <Field type="text" name="title" id="title" className={errors.title && touched.title ? "input-error" : null} />
                                    <ErrorMessage name="title" component="span" className='error' />
                                </label>
                            </div>
                            <div>
                                <label> Author
                                    <Field type="text" name="author" id="author" className={errors.author && touched.author ? "input-error" : null} />
                                    <ErrorMessage name="author" component="span" className='error' />
                                </label>
                            </div>
                            <div>
                                <label> Price
                                    <Field type="number" name="price" id="price" className={errors.price && touched.price ? "input-error" : null} />
                                    <ErrorMessage name="price" component="span" className='error' />
                                </label>
                            </div>
                            <button type="submit"
                                className={!(dirty && isValid) ? "disabled-btn" : ""}
                                disabled={!(dirty && isValid)}>Add Book</button>
                        </Form>
                    </div>
                );
            }}
        </Formik>
    )
}
