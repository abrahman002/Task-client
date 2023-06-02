import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import './footer.css'



const Footer = () => {
    return (
        <Container className='footer'>
            <div className="container-fluid text-center text-md-left footer-text">
                <div className="row">
                    <div className="col-md-6 mt-md-0 mt-3">
                        <h5 className="text-uppercase">Mohite Consultancy Services (MCS)</h5>
                        <p>Mohite Consultancy Services (MCS) is a dynamic and innovative consulting firm that specializes in providing comprehensive solutions for businesses.</p>
                    </div>

                    <hr className="clearfix w-100 d-md-none pb-0" />

                    <div className="col-md-6 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Social Media</h5>
                        <ul className="list-unstyled">
                            <li><a href="#!">Facebook</a></li>
                            <li><a href="#!">Youtube</a></li>
                            <li><a href="#!">Instagram</a></li>
                            <li><a href="#!">LinkedIn</a></li>
                        </ul>
                    </div>

                   
                </div>
            </div>

            <div className="footer-copyright text-center py-3">© 2020 Copyright:
                <a > Abdur Rahman</a>
            </div>
        </Container>
    );
};

export default Footer;