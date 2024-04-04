import { useNavigate, useParams } from "react-router-dom";
import logo from "../../../static/images/amartha.PNG";
import Navbar from "../../organism/navbar/index.js";
import { Button, ButtonGroup, Card, Col, Container, Image, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { apiUrl } from "../../../custom/envcutom.js";

const IndexDetail = () => {
    const [detail, SetDetail] = useState({})
    const params = useParams();

    


    const bulletStyle = {
        display: 'inline-block',
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        backgroundColor: detail.status === 'aktif' ? 'green' : 'red',
        animation: 'pulse 1s infinite alternate',
    };
    const getId = () => {

        axios.get(`${apiUrl}vacancy/${params.id}`).then((response) => {
            SetDetail(response.data.data)
            console.log("ini res", response.data.data)

        })

    }
    useEffect(() => {

        if (params.id) {
            getId()
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
                            <Card  style={{ border: 'none' }}> 
                                <Card.Body >
                                    <Card.Img src={detail.image} style={{ height: '50%' }} />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} style={{ marginTop: '20px', marginBottom: '20px' }}>
                            <Card>
                                <Card.Body>
                                    {detail.status === 'aktif' && <span style={bulletStyle} />} {detail.status}
                                </Card.Body>
                            </Card>

                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <Card >
                                <Card.Header>Description</Card.Header>

                                <Card.Body>
                                    <Card.Text>{detail.location}</Card.Text>
                                    <Card.Text>{detail.jobType}</Card.Text>
                                    <Card.Text>{detail.description}</Card.Text>
                                    <Card.Text>{detail.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row style={{ marginTop: '20px' }}>
                        <Col md={12}>
                            <Card >
                                <Card.Header>jobType</Card.Header>

                                <Card.Body>
                                    <Card.Text>{detail.location}</Card.Text>
                                    <Card.Text>{detail.jobType}</Card.Text>
                                    <Card.Text>{detail.description}</Card.Text>
                                    <Card.Text>{detail.salary}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row style={{ marginTop: '20px' }}>
                        <Col md={12} style={{ display: 'flex', justifyContent: 'center' }}>
                            <Card style={{ border: 'none' }}>
                                <Card.Body>

                                    <Button style={{ marginRight: '10px' }}>Send Application</Button>

                                    <Button >Back</Button>

                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default IndexDetail