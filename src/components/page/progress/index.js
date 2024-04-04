import { useNavigate, useParams } from "react-router-dom";
import logo from "../../../static/images/amartha.PNG";
import Navbar from "../../organism/navbar/index.js";
import { Button, ButtonGroup, Card, Col, Container, Image, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { apiUrl } from "../../../custom/envcutom.js";
import ModalInterview from "../../organism/modal/interview/index.js";
const Index = () => {
    const [progress, setProgress] = useState([]);
    const params = useParams();
    const [showModal, setShowModal] = useState(false);
    const [selectedDetail, setSelectedDetail] = useState(null);
    const closeModal = () => {
        setSelectedDetail(null)
        setShowModal(false);
      };
      const getDetailById = (id) => {
        setSelectedDetail(id);
        setShowModal(true);
      }
    const getProgress = () => {
        axios.get(`${apiUrl}apply/${params.id}`).then((response) => {
            setProgress(response.data.data)
            console.log("ini res", response.data.data)

        })
    }
    useEffect(() => {

        if (params.id) {
            getProgress()
        }
    }, [params.id]);
    
    return (
        <div className="fix-header">
            <div id="main-wrapper">
                <header className="topheader">
                    <div className="fix-width">
                        <Navbar logo={logo} />
                    </div>
                </header>
                <Container>
                    <Row>
                        <Col md={12}>
                            {progress.map(data => {
                                const [name, status, tanggal] = data
                                return (
                                    <Card style={{ width: '18rem', margin: '20px 40px 20px 40px', borderRadius: '20px 20px 20px ' }} >
                                        {/* <Card.Img variant="top" src={data.image} style={{ borderRadius: '50px 40px 50px ' }} /> */}
                                        <Card.Body>
                                            <Card.Title>{name}</Card.Title>
                                            <Card.Text>
                                                {status}
                                            </Card.Text>
                                            <Card.Text>
                                                {tanggal}
                                            </Card.Text>
                                        </Card.Body>
                                        
                                    </Card>
                                )
                            })}
                            <Button onClick={() => getDetailById(params.id)} style={{ marginRight: '10px' }}>View Interview</Button>
                        </Col>
                    </Row>
                    <ModalInterview show={showModal} closeModal={closeModal}  setShowModal={setShowModal} selectedDetail={selectedDetail} />
                </Container>
            </div>
        </div>
    )
}

export default Index;