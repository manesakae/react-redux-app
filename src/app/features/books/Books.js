import React, { createContext, useState } from 'react'
import { Accordion } from 'react-bootstrap'
import AddBook from './components/AddBook'
import AddBookWithFormikValidation from './components/AddBookWithFormikValidation'
import AddBookWithValidation from './components/AddBookWithValidation'
import BookList from './components/BookList'

export const SelectedBookContext = createContext();

export default function Books() {
    const [activeAccordionKey, setActiveAccordionKey] = useState('0');
    const [selectedBook, setSelectedBook] = useState({
        title: "",
        author: "",
        price: 0
    });
    const selectBookCallback = valueFromChild => {
        setSelectedBook(valueFromChild)
        setActiveAccordionKey('2');
    };
    const onEditCancel = () => {
        setSelectedBook({
            title: "",
            author: "",
            price: 0
        })
    }
    const handleSelect = (eventKey) => setActiveAccordionKey(eventKey);

    return (
        <div>
            <h4>Books Page</h4>
            <Accordion defaultActiveKey="0" activeKey={activeAccordionKey} onSelect={handleSelect} >
                <Accordion.Item eventKey="0" >
                    <Accordion.Header>1. Add Book</Accordion.Header>
                    <Accordion.Body>
                        <AddBook />

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>2. Add Book with Validation</Accordion.Header>
                    <Accordion.Body>
                        <AddBookWithValidation />

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>3. {selectedBook?.id ? 'Edit' : 'Add'} Book with Formik Validation</Accordion.Header>
                    <Accordion.Body>
                        <AddBookWithFormikValidation selectedBook={selectedBook} editCancel={onEditCancel} />

                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>


            <br />
            <BookList selectBookCallback={selectBookCallback} />
        </div>
    )
}
