import { useState, useEffect } from "react";
import axios from 'axios'; import "../../../../static/bootstrap/css/bootstrap.min.css";
import "../../../../static/css/colors/blue.css";
import "../../../../static/css/style.css";
import useMessage from "../../../hooks/useMessage";
import { Button, ButtonGroup, Form, Modal } from "react-bootstrap";

let Index = (props) => {
    const [attitude, setAttitude] = useState('');
    const [communication, setCommunication] = useState('');
    const [competency, setCompetency] = useState('');
    const [enthusiasm, setEnthusiasm] = useState('');
    const [experience, setExperience] = useState('');
    const [grooming, setGrooming] = useState('');

    const message = useMessage();

    const handleInput = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/api/score", {
            attitude: attitude,
            communication: communication,
            competency: competency,
            enthusiasm: enthusiasm,
            experience: experience,
            grooming: grooming,
            interview_id: props.id
        }).then((response) => {
            message.success(response)
            console.log(response)
            // setPassword({ password });
        }).catch((error) => {
            message.error(error)
            console.log(error.response)

        });

    }

    return (

        <Modal show={props.show} onHide={props.closeModal} size={"lg"} backdrop={"static"}>

            <Modal.Body>
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Input Score</h4>
                        <h6 className="card-subtitle"> All bootstrap element classNameies </h6>
                        <form className="form">
                            <div className="form-group m-t-40 row">
                                <label for="example-text-input" className="col-2 col-form-label">Attitude</label>
                                <div className="col-10">
                                    <input className="form-control" type="number" required={true} onChange={e => setAttitude(e.target.value)} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="example-search-input" className="col-2 col-form-label">Communication</label>
                                <div className="col-10">
                                    <input className="form-control" type="number" required={true} onChange={e => setCommunication(e.target.value)} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="example-email-input" className="col-2 col-form-label">Competency</label>
                                <div className="col-10">
                                    <input className="form-control" type="number" required={true} onChange={e => setCompetency(e.target.value)} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="example-url-input" className="col-2 col-form-label">Enthusiasm</label>
                                <div className="col-10">
                                    <input className="form-control" type="number" required={true} onChange={e => setEnthusiasm(e.target.value)} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="example-tel-input" className="col-2 col-form-label">Experience</label>
                                <div className="col-10">
                                    <input className="form-control" type="number" required={true} onChange={e => setExperience(e.target.value)} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="example-tel-input" className="col-2 col-form-label">Grooming</label>
                                <div className="col-10">
                                    <input className="form-control" type="number" required={true} onChange={e => setGrooming(e.target.value)} />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <ButtonGroup >
                    <Button onClick={props.closeModal} style={{ marginRight: '10px' }}>CLOSE</Button>
                    <Button onClick={(e) => handleInput(e)}>SAVE</Button>
                    {/* <Button onClick={handleSubmit}>Send</Button>  */}
                </ButtonGroup>

            </Modal.Footer>
        </Modal>



    )
}

export default Index;