import { nanoid } from '@reduxjs/toolkit';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { bookAdd } from '../../../services/reducers/booksSlice';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

export default function AddBookWithValidation() {
    const initialFormValues = {
        title: "",
        author: "",
        price: 0
    }
    const [formValues, setFormValues] = useState(initialFormValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value })
    }

    const validate = (values) => {
        let errors = {}
        if (!values.title) errors.title = "Title cannot be empty";
        if (!values.author) errors.author = "Author cannot be empty";
        if (!values.price) errors.price = "Price cannot be 0";
        else if (values.price > 1000) errors.price = "Price cannot be greater than 1000";
        return errors;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        //validate form
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }

    const submitForm = () => {
        dispatch(bookAdd({ ...formValues, id: nanoid() }))
        setFormValues(initialFormValues)
    }

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            submitForm();
        }
    }, [formErrors])
    return (
        <div>
            <h5>Add Book With Validation</h5>
            <Form noValidate onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter title"
                            name="title"
                            value={formValues.title}
                            onChange={handleChange}
                            className={formErrors.title && "input-error"}
                        />
                        {formErrors.title && (<span className='error'>{formErrors.title}</span>)}
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                        <Form.Label>Author</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Author name"
                            name="author"
                            value={formValues.author}
                            onChange={handleChange}
                            className={formErrors.author && "input-error"}
                        />
                        {formErrors.author && (<span className='error'>{formErrors.author}</span>)}
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter price"
                            name="price"
                            value={formValues.price}
                            onChange={handleChange}
                            className={formErrors.price && "input-error"}
                        />
                        {formErrors.price && (<span className='error'>{formErrors.price}</span>)}
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Button type="submit">Add</Button>
            </Form>
            {/* <form onSubmit={handleSubmit}>
                <div>
                    <label> Title
                        <input type="text" name="title" value={formValues.title} onChange={handleChange} className={formErrors.title && "input-error"} />
                        {formErrors.title && (<span className='error'>{formErrors.title}</span>)}
                    </label>
                </div>
                <div>
                    <label> Author
                        <input type="text" name="author" value={formValues.author} onChange={handleChange} className={formErrors.author && "input-error"} />
                        {formErrors.author && (<span className='error'>{formErrors.author}</span>)}
                    </label>
                </div>
                <div>
                    <label> Price
                        <input type="number" name="price" value={formValues.price} onChange={handleChange} className={formErrors.price && "input-error"} />
                        {formErrors.price && (<span className='error'>{formErrors.price}</span>)}
                    </label>
                </div>
                <button type="submit">Add Book</button>
            </form> */}
        </div>
    )
}
