import Table from 'react-bootstrap/Table';
import { Container } from "react-bootstrap";
import BookCard from "./BookCard";
import { useEffect, useState } from "react";
import Swal from 'sweetalert2'



const BookMark = () => {

    // console.log(loadedData)
    const [bookmarks, setBookmarks] = useState([]);
    // console.log(bookmarks)


    const handleDelete = (id) => {
        const procced = confirm('are you sure delete this item');
        if (procced) {
            fetch(`https://assignment-server-abdurrahmanislamhossainx223-gmailcom.vercel.app/userdata/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Successfully item delete',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        const rimaining = bookmarks.filter(bookmark => bookmark._id !== id);
                        setBookmarks(rimaining);
                    }
                })
        }
    }

    const handleConfirm = id => {
        fetch(`https://assignment-server-abdurrahmanislamhossainx223-gmailcom.vercel.app/userdata/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ info: 'Confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const rimaing = bookmarks.filter(bookmark => bookmark._id !== id);
                    const updated = bookmarks.find(bookmark => bookmark._id === id);
                    updated.info = "Confirm";
                    const newBook = [updated, ...rimaing];
                    setBookmarks(newBook);
                }
            })
    }

    useEffect(() => {
        fetch('https://assignment-server-abdurrahmanislamhossainx223-gmailcom.vercel.app/userdata')
            .then(res => res.json())
            .then(data => setBookmarks(data))
    }, [bookmarks])
    return (
        <Container className="m-5">
            <Table striped bordered hover>

                <tbody>
                    {
                        bookmarks.map(data => <BookCard
                            key={data._id}
                            data={data}
                            handleDelete={handleDelete}
                            handleConfirm={handleConfirm}
                        ></BookCard>)
                    }
                </tbody>
            </Table>
        </Container>
    );
};

export default BookMark;