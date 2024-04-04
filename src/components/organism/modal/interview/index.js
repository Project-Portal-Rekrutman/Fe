import axios from "axios";
import { useState, useEffect } from "react";
import { Button, ButtonGroup, Card, Col, Container, Form, Modal, Row } from "react-bootstrap";
import useMessage from "../../../hooks/useMessage";
import { useDispatch, useSelector } from "react-redux";
// import { CreateData, UpdateId, getDemos, getDemosId } from "../../../../features/demo";
import { apiUrl } from "../../../../custom/envcutom";
const ModalInterview = (props) => {
    const [data, setData] = useState({})
    console.log("ini Id", props.selectedDetail);

    const getInterview = () => {
        axios.get(`${apiUrl}interview/${props.selectedDetail}`).then((response) => {
            setData(response.data.data)
            console.log("ini respon modal", response.data.data)
        })

    }
    useEffect(() => {
        if (props.selectedDetail) {
            getInterview(); 
        }
        
    }, [props.selectedDetail]);

    return (
        <Modal show={props.show} onHide={props.closeModal} size={"lg"} backdrop={"static"}> 

            <Modal.Body>
                <Container>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Text>Location    : {data.location}</Card.Text>
                                    <Card.Text>Schedule    : {data.schedule}</Card.Text>
                                    <Card.Text>Interviewer : {data.inteviewerName}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <ButtonGroup >
                <Button onClick={props.closeModal} style={{ marginRight: '10px' }}>CLOSE</Button>
                {/* <Button onClick={handleSubmit}>Send</Button>  */}
                </ButtonGroup>

            </Modal.Footer>
        </Modal>
    );
};

export default ModalInterview;