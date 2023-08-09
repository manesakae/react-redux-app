import { nanoid } from '@reduxjs/toolkit';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { bookAdd } from '../../../services/reducers/booksSlice';

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
            <form onSubmit={handleSubmit}>
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
            </form>
        </div>
    )
}
