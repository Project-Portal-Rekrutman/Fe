import "../../../static/bootstrap/css/bootstrap.min.css";
import "../../../static/assets/owl.carousel/owl.carousel.min.css";
import "../../../static/assets/owl.carousel/owl.theme.default.css";
import "../../../static/css/style.css";
import logo from "../../../static/images/amartha.jpg";
import Navbar from "../../organism/navbar/index.js";
import { Card, Col, Container, Row, Carousel } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { apiUrl } from "../../../custom/envcutom.js";
import { Link } from "react-router-dom";

const Index = () => {


    let data = [

        {
            imageUrl: "https://i.ibb.co/s5fbQjL/gdp.png"
        },
        {
            imageUrl: "https://i.ibb.co/s5fbQjL/gdp.png"
        },

    ]
    const [carouselItems, setCarouselItems] = useState(data);
    const [applies, setApplies] = useState([]);



    const getData = () => {
        axios.get(`${apiUrl}vacancys`).then((response) => {
            setApplies(response.data.data)

        })

    }

    useEffect(() => {
        getData()
    })

    return (
        <div className="fix-header">
            <div id="main-wrapper">
                <header className="topheader">
                    <div className="fix-width">
                        <Navbar logo={logo} />
                    </div>
                </header>
                <div className="page-wrapper">
                    <Container >
                        <Row style={{ border: 'none', padding: '40px 0 20px 0', height: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Col md={6} style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Carousel
                                >
                                    {carouselItems.map((item) => (
                                        <Carousel.Item key={item.id}>
                                            <img
                                                className="d-block w-100"
                                                src={item.imageUrl}
                                                alt={item.title}
                                            />

                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                            </Col>
                        </Row>
                    </Container>

                    <Container fluid>

                        <Row className={'row '} style={{ padding: '80px 50px' }}>
                                
                            <Col className={'item-vacancy'} md={12}>
                                <Row className={'text-center'} id={'demos'}>
                                    {applies.map(data => {

                                        return (
                                            <Card style={{ width: '18rem', margin: '20px 40px 20px 40px', borderRadius: '20px 20px 20px ' }} >
                                                <Card.Img variant="top" src={data.image} style={{ borderRadius: '50px 40px 50px ' }} />
                                                <Card.Body>
                                                    <Card.Title>{data.title}</Card.Title>
                                                    <Card.Text>
                                                        {data.description}
                                                    </Card.Text>
                                                    <Link to={`/index-detail/${data.id}`} className={"text-decoration-none"}>View Vacancy</Link>
                                                </Card.Body>
                                            </Card>
                                        )
                                    })}
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={11} className="sub-footer">
                                <span>Copyright 2017. All Rights Reserved by <a className="text-white" href="https://wrappixel.com/templates/monsteradmin/" target="_blank">Monster Admin</a></span>
                                <span className="pull-right">Design & Developed by Fajar <a className="text-white" href="https://wrappixel.com" target="_blank">WrapPixel</a></span>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <script src="../../../static/js/jquery.min.js"></script>
            <script src="../../../static/bootstrap/js/tether.min.js"></script>
            <script src="../../../static/bootstrap/js/bootstrap.min.js"></script>
            <script src="../../../static/js/waves.js"></script>
            <script src="../../../static/js/sticky-kit.min.js"></script>
            <script src="../../../static/assets/owl.carousel/owl.carousel.min.js"></script>
            <script src="../../../static/js/custom.min.js"></script>
        </div>
    )
}

export default Index;