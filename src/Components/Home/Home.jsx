import { Button, Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2'


const Home = () => {
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const title = form.title.value;
        // console.log(title)
        const discription = form.discription.value;
        const status = form.status.value;
        // console.log(title,discription,status)
        const userInfo = {
            title, discription, status
        }
        console.log(userInfo)

        fetch('https://assignment-server-abdurrahmanislamhossainx223-gmailcom.vercel.app/userdata', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Successfully item Added',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })


    }
    return (
        <Container className='m-5'>
            <form onSubmit={handleSubmit}>

                <label className='p-1 '>Title</label>
                <Form.Control size="lg" type="text" name='title' placeholder="Title" />
                <br />
                <label className='p-1 '>Discription</label>
                <Form.Control size="lg" type="text" name='discription' placeholder="Discription" />
                <br />
                <label className='p-1 ' >Status</label>
                <Form.Control size="lg" type="text" name='status' placeholder="Status" />
                <br />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </div>


            </form>
        </Container>
    );
};

export default Home;