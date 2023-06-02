import { Button, Container } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2'


const Updated = () => {
    const data = useLoaderData();
    // console.log(data)

    const { _id, title, discription, status } = data;


    const handleupdated = (e) => {
        e.preventDefault();

        const form = e.target;

        const title = form.title.value;
        const discription = form.discription.value;
        const status = form.status.value;

        const updatedUser = {
            title, discription, status
        }

        fetch(`https://assignment-server-abdurrahmanislamhossainx223-gmailcom.vercel.app/userdata/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.matchedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Successfully item update',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }

            })

    }

    return (
        <Container className='m-5'>
            <form onSubmit={handleupdated}>

                <label className='p-1 '>Title</label>
                <Form.Control size="lg" type="text" name='title' defaultValue={title} placeholder="Title" />
                <br />
                <label className='p-1 '>Discription</label>
                <Form.Control size="lg" type="text" name='discription' defaultValue={discription} placeholder="Discription" />
                <br />
                <label className='p-1 ' >Status</label>
                <Form.Control size="lg" type="text" name='status' defaultValue={status} placeholder="Status" />
                <br />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button variant="primary" type="submit">
                        Update
                    </Button>
                </div>


            </form>
        </Container>
    );
};

export default Updated;