import { useState, useEffect } from "react";
import axios from 'axios'; import "../../../../static/bootstrap/css/bootstrap.min.css";
import "../../../../static/css/colors/blue.css";
import "../../../../static/css/style.css";
import useMessage from "../../../hooks/useMessage";
import { apiUrl } from "../../../../custom/envcutom";

let Index = () => {
    const [company, setCompany] = useState('');
    const [employment, setEmployment] = useState('');
    const [position, setPosition] = useState('');
    const [description, setDescription] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');

    const message = useMessage();

    const handleInput = (e) => {
        e.preventDefault();
        axios.post(`${apiUrl}experience`, {
            name_company: company,
            name_employment_type: employment,
            name_position: position,
            description: description,
            start_date: start,
            end_date: end
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
                                    <h4 className="card-title">Experience</h4>
                                    <form className="form">
                                        <div className="form-group m-t-40 row">
                                            <label for="example-text-input" className="col-2 col-form-label">Company</label>
                                            <div className="col-10">
                                                <input className="form-control" type="text" required={true} onChange={e => setCompany(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-search-input" className="col-2 col-form-label">Employment Type</label>
                                            <div className="col-10">
                                                <input className="form-control" type="text" required={true} onChange={e => setEmployment(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-email-input" className="col-2 col-form-label">Position</label>
                                            <div className="col-10">
                                                <input className="form-control" type="text" required={true} onChange={e => setPosition(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-url-input" className="col-2 col-form-label">Description</label>
                                            <div className="col-10">
                                                <input className="form-control" type="number" required={true} onChange={e => setDescription(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-url-input" className="col-2 col-form-label">Start Date</label>
                                            <div className="col-10">
                                                <input className="form-control" type="number" required={true} onChange={e => setStart(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-url-input" className="col-2 col-form-label">End Date</label>
                                            <div className="col-10">
                                                <input className="form-control" type="number" required={true} onChange={e => setEnd(e.target.value)} />
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