import { useState, useEffect } from "react";
import axios from 'axios'; import "../../../../static/bootstrap/css/bootstrap.min.css";
import "../../../../static/css/colors/blue.css";
import "../../../../static/css/style.css";
import useMessage from "../../../hooks/useMessage";
import { apiUrl } from "../../../../custom/envcutom";

let Index = () => {
    const [univ, setUniv] = useState('');
    const [major, setMajor] = useState('');
    const [degree, setDegree] = useState('');
    const [gpa, setGpa] = useState('');

    const message = useMessage();

    const handleInput = (e) => {
        e.preventDefault();
        axios.post(`${apiUrl}education`, {
            name_univ: univ,
            name_major: major,
            name_degree: degree,
            gpa: gpa
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
                                    <h4 className="card-title">Education</h4>
                                    <form className="form">
                                        <div className="form-group m-t-40 row">
                                            <label for="example-text-input" className="col-2 col-form-label">Universitas Name</label>
                                            <div className="col-10">
                                                <input className="form-control" type="text" required={true} onChange={e => setUniv(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-search-input" className="col-2 col-form-label">Major Name</label>
                                            <div className="col-10">
                                                <input className="form-control" type="text" required={true} onChange={e => setMajor(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-email-input" className="col-2 col-form-label">Degree Name</label>
                                            <div className="col-10">
                                                <input className="form-control" type="text" required={true} onChange={e => setDegree(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-url-input" className="col-2 col-form-label">GPA</label>
                                            <div className="col-10">
                                                <input className="form-control" type="number" required={true} onChange={e => setGpa(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="form-group text-center m-t-20">
                                            <div className="col-xs-12">
                                                <button className="btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light" type="submit"
                                                    onClick={(e) => handleInput(e)} >Save</button>
                                                <Button onClick={props.closeModal} style={{ marginRight: '10px' }}>CANCEL</Button>
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