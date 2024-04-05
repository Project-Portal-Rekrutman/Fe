import axios from "axios";
import { useState } from "react";
import { Button, ButtonGroup, Form, Modal } from "react-bootstrap";
import { apiUrl } from "../../../../custom/envcutom";
import useMessage from "../../../hooks/useMessage";
import { useNavigate } from "react-router-dom";
const ModalInterview = (props) => {
    const [data, setData] = useState({
        location: "",
        schedule: "",
        interviewerName: ""
    })

    const navigate = useNavigate()

    let msg = useMessage()

    const handleChange = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }

    const handleSubmit = () => {
        axios.post(`${apiUrl}interview/${props.selectedId}`, data).then((response)=>{
            msg.success(response)
            props.setShowModal(false)
            navigate("/admin/application")
           }).catch((error)=>{
            msg.error(error)
           })
    }

    return (
        <Modal show={props.show} onHide={props.closeModal} size={"lg"} backdrop={"static"}>
            <Modal.Body>
                <Form.Group className={"mb-3"} style={{ display: "none" }}>
                    <Form.Label>ID</Form.Label>
                    <Form.Control
                        name={"id"}
                        onChange={handleChange}
                        value={data.id}
                    />
                </Form.Group>
                <Form.Group className={"mb-3"}>
                    <Form.Label>Location</Form.Label>
                    <Form.Control
                        name={"location"}
                        onChange={handleChange}
                        value={data.location}
                    />
                </Form.Group>
                <Form.Group className={"mb-3"}>
                    <Form.Label>Schedule</Form.Label>
                    <Form.Control
                        name={"schedule"}
                        onChange={handleChange}
                        value={data.schedule}
                    />
                </Form.Group>
                <Form.Group className={"mb-3"}>
                    <Form.Label>Interviewer Name</Form.Label>
                    <Form.Control
                        name={"interviewerName"}
                        onChange={handleChange}
                        value={data.interviewerName}
                    />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <ButtonGroup >
                <Button onClick={handleSubmit}>SAVE</Button>
                <Button onClick={props.closeModal} style={{ marginLeft: '10px' }}>CANCEL</Button>
                </ButtonGroup>

            </Modal.Footer>
        </Modal>
    )
}

export default ModalInterview;