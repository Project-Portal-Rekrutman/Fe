import { useState, useEffect } from "react";
import axios from 'axios'; import "../../../../static/bootstrap/css/bootstrap.min.css";
import "../../../../static/css/colors/blue.css";
import "../../../../static/css/style.css";
import useMessage from "../../../hooks/useMessage";
import { apiUrl } from "../../../../custom/envcutom";

let Index = () => {
    const [name, setName] = useState('');
    const [issuing, setIssuing] = useState('');
    const [issued, setIssued] = useState('');
    const [expired, setExpired] = useState('');
    const [id, setId] = useState('');
    const [url, setUrl] = useState('');

    const message = useMessage();

    const handleInput = (e) => {
        e.preventDefault();
        axios.post(`${apiUrl}licensecertification`, {
            name_license_certification: name,
            issuing_organization: issuing,
            issued_date: issued,
            date_expired: expired,
            credential_id: id,
            credential_url: url
        }).then((response) => {
            message.success(response.data.data)
            console.log(response)
        }).catch((error) => {
            message.error(error)
            console.log(error.response.data)
        });
    }

    return (
        <Modal show={props.show} onHide={props.closeModal} size={"lg"} backdrop={"static"}>
            <Modal.Body>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-8">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">License & Certification</h4>
                                    <form className="form">
                                        <div className="form-group m-t-40 row">
                                            <label for="example-text-input" className="col-2 col-form-label">License Certification Name</label>
                                            <div className="col-10">
                                                <input className="form-control" type="text" required={true} onChange={e => setName(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-search-input" className="col-2 col-form-label">Issuing Organization</label>
                                            <div className="col-10">
                                                <input className="form-control" type="text" required={true} onChange={e => setIssuing(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-email-input" className="col-2 col-form-label">Issued Date</label>
                                            <div className="col-10">
                                                <input className="form-control" type="date" required={true} onChange={e => setIssued(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-url-input" className="col-2 col-form-label">Date Expired</label>
                                            <div className="col-10">
                                                <input className="form-control" type="date" required={true} onChange={e => setExpired(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-url-input" className="col-2 col-form-label">Credential ID</label>
                                            <div className="col-10">
                                                <input className="form-control" type="text" required={true} onChange={e => setId(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-url-input" className="col-2 col-form-label">Credential URL</label>
                                            <div className="col-10">
                                                <input className="form-control" type="text" required={true} onChange={e => setUrl(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="form-group text-center m-t-20">
                                            <div className="col-xs-12">
                                                <button className="btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light" type="submit"
                                                    onClick={(e) => handleInput(e) } >Save</button>

                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default Index;