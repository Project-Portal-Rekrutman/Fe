import { Card, Container, Row, Col, Button } from "react-bootstrap";
import Navbar from "../../organism/navbar/index.js";
import logo from "../../../static/images/amartha.PNG";
import { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "../../../custom/envcutom.js";
import { Link } from "react-router-dom"

const Index = () => {
    const [myApp, setMyApp] = useState([]);
    const getMyApp = () => {
        const config = {
            headers: {
                Authorization: localStorage.getItem("user")
            }
        }
        axios.get(`${apiUrl}applies`, config).then((response) => {
            setMyApp(response.data.data)
            console.log(response.data.data);

        })
    }
    useEffect(() => {
        getMyApp();
    }, [])
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
                            {myApp?.map(data => {

                                return (
                                    <Card style={{ width: '18rem', margin: '20px 40px 20px 40px', borderRadius: '20px 20px 20px ' }} >
                                        <Card.Img variant="top" src={data.image} style={{ borderRadius: '50px 40px 50px ' }} />
                                        <Card.Body>
                                            <Card.Title>{data.vacancy.title}</Card.Title>
                                            <Card.Text>
                                                {data.vacancy.description}
                                            </Card.Text>
                                            <Button>
                                                <Link to={`/progress/${data.id}`} className={"text-decoration-none"}>View Progress</Link>
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                )
                            })}
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Index;