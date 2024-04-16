import axios from "axios";
import { useState } from "react";
import { Button, ButtonGroup, Form, Modal } from "react-bootstrap";
import { apiUrl } from "../../../../custom/envcutom";
import useMessage from "../../../hooks/useMessage";
import { useNavigate } from "react-router-dom";

const ModalEducation = (props) => {
    const [data, setData] = useState({
        name_univ: "",
        name_major: "",
        name_degree: "",
        gpa: ""
    })
    const navigate = useNavigate();

    let msg = useMessage();

    const handleChange = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }

    const handleSubmit = () => {
        axios.post(`${apiUrl}education`, data).then((response) => {
            msg.success(response)
            props.setShowModal(false)
            navigate("/resume")
        }).catch((error) => {
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
                    <Form.Label>Univ Name</Form.Label>
                    <Form.Control
                        name={"name_univ"}
                        onChange={handleChange}
                        value={data.name_univ}
                    />
                </Form.Group>
                <Form.Group className={"mb-3"}>
                    <Form.Label>Major Name</Form.Label>
                    <Form.Control
                        name={"name_major"}
                        onChange={handleChange}
                        value={data.name_major}
                    />
                </Form.Group>
                <Form.Group className={"mb-3"}>
                    <Form.Label>Degree Name</Form.Label>
                    <Form.Control
                        name={"name_degree"}
                        onChange={handleChange}
                        value={data.name_degree}
                    />
                </Form.Group>
                <Form.Group className={"mb-3"}>
                    <Form.Label>GPA</Form.Label>
                    <Form.Control
                        name={"gpa"}
                        onChange={handleChange}
                        value={data.gpa}
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

export default ModalEducation;