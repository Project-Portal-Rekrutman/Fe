import "../../../static/bootstrap/css/bootstrap.min.css";
import "../../../static/assets/owl.carousel/owl.carousel.min.css";
import "../../../static/assets/owl.carousel/owl.theme.default.css";
import "../../../static/css/style.css";
import logo from "../../../static/images/amartha.PNG";
import Navbar from "../../organism/navbar/index.js";
import { Card, Col, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import { useState, useEffect } from "react";
import axios from "axios";
import { apiUrl } from "../../../custom/envcutom.js";
import {Link, useNavigate} from "react-router-dom";

const Index = () => {

    const [cv, setCv] = useState([]);

    const getData = () => {
        axios.get(`${apiUrl}educations`).then((response) => {
            setCv(response.data.data)

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
                    <div className="container-fluid">

                        <div className="row light-blue">
                            <div className="col-md-12" id="demos">
                                <div className="fix-width">
                                    <div className="row text-center">
                                        {cv.map(data => {

                                            return (
                                                <Card style={{ width: '18rem', margin: '20px 40px 20px 40px', borderRadius: '20px 20px 20px ' }} >
                                                    <Card.Img variant="top" src={data.image} style={{ borderRadius: '50px 40px 50px ' }} />
                                                    <Card.Body>
                                                        <Card.Title>Education</Card.Title>
                                                        <Card.Text>
                                                            {data.name_univ}
                                                        </Card.Text>
                                                        <Card.Text>
                                                            {data.name_major}
                                                        </Card.Text>
                                                        <Card.Text>
                                                            {data.name_degree}
                                                        </Card.Text>
                                                        <Card.Text>
                                                            {data.gpa}
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <footer className="footer row">
                            <div className="fix-width">
                                <div className="clearfix"></div>
                                <div className="col-md-11 sub-footer">
                                    <span>Copyright 2017. All Rights Reserved by <a className="text-white" href="https://wrappixel.com/templates/monsteradmin/" target="_blank">Monster Admin</a></span>
                                    <span className="pull-right">Design & Developed by <a className="text-white" href="https://wrappixel.com" target="_blank">WrapPixel</a></span>

                                </div>
                            </div>
                        </footer>
                    </div>
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