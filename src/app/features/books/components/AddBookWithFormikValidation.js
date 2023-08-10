import React, { useEffect, useState } from 'react'
import { Formik, ErrorMessage } from 'formik';
import addBookSchema from '../formValidatorSchema/addbookSchema';
import { useDispatch } from 'react-redux';
import { bookAdd, bookUpdate } from '../../../services/reducers/booksSlice';
import { nanoid } from '@reduxjs/toolkit';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

export default function AddBookWithFormikValidation({ selectedBook, editCancel }) {
    const defaultFormValue = {
        title: "",
        author: "",
        price: 0
    }
    const dispatch = useDispatch();
    const [initialValues, setInitialValues] = useState(defaultFormValue)
    const [isAddMode, setIsAddMode] = useState(true)

    useEffect(() => {
        setIsAddMode(selectedBook?.id ? false : true)
        const initialFormValues = selectedBook?.id ? selectedBook : defaultFormValue;
        setInitialValues(initialFormValues)
    }, [selectedBook])


    return (
        <Formik
            initialValues={initialValues}
            enableReinitialize={true}
            validationSchema={addBookSchema}
            onSubmit={(values, { resetForm }) => {
                if (isAddMode) {
                    dispatch(bookAdd({ ...values, id: nanoid() }));
                } else {
                    dispatch(bookUpdate({ ...values }));
                }
                resetForm();
            }}
        >
            {(formik) => {
                const { errors, touched, isValid, dirty, values, handleChange, handleBlur, handleSubmit, resetForm } = formik;
                return (
                    <div>
                        <h5>{isAddMode ? "Add" : "Edit"} Book With Formik Validation</h5>
                        {/* <Form>
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
                                disabled={!(dirty && isValid)}>{isAddMode ? "Add" : "Edit"} Book</button>
                            <button type="btn" onClick={() => {
                                formik.resetForm()
                                editCancel()
                            }

                            }>Cancel</button>
                        </Form> */}
                        <Form onSubmit={handleSubmit}>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="4">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter title"
                                        name="title"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.title}
                                        className={errors.title && touched.title ? "input-error" : null}
                                    />
                                    {touched.title && errors.title ? (
                                        <div className="error">{errors.title}</div>
                                    ) : null}
                                </Form.Group>
                                <Form.Group as={Col} md="4">
                                    <Form.Label>Author</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Author name"
                                        name="author"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.author}
                                        className={errors.author && touched.author ? "input-error" : null}
                                    />

                                    <ErrorMessage name="author" component="span" className='error' />
                                </Form.Group>
                                <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Enter price"
                                        name="price"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.price}
                                        className={errors.price && touched.price ? "input-error" : null}
                                    />
                                    <ErrorMessage name="price" component="span" className='error' />
                                </Form.Group>
                            </Row>
                            <Button type="submit"
                                className={!(dirty && isValid) ? "disabled-btn" : ""}
                                disabled={!(dirty && isValid)}>
                                {isAddMode ? "Add" : "Edit"} Book
                            </Button>

                            <Button type="button"
                                onClick={() => {
                                    resetForm()
                                    editCancel()
                                }}>
                                Cancel
                            </Button>
                        </Form>
                    </div>
                );
            }}
        </Formik>
    )
}
