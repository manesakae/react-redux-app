import * as Yup from 'yup';

const addBookSchema = Yup.object().shape({
    title: Yup.string().required("Title is required").min(3, "Title should have more than 3 char"),
    author: Yup.string().required("Author is required").min(3, "Author should have more than 3 char"),
    price: Yup.number().required("Price is required").lessThan(1000, "Price should be lass than 1000")
});

export default addBookSchema;