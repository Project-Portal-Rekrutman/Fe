import "../../../static/bootstrap/css/bootstrap.min.css";
import "../../../static/assets/owl.carousel/owl.carousel.min.css";
import "../../../static/assets/owl.carousel/owl.theme.default.css";
import "../../../static/css/style.css";
import logo from "../../../static/images/logo-icon.png";
import Navbar from "../../organism/navbar/index.js";
import { Card, Col, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import { useState, useEffect } from "react";
import axios from "axios";
import { apiUrl } from "../../../custom/envcutom.js";


const Index = () => {

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
                    <div className="container-fluid">
                        {/* <div className="fix-width"> */}
                        {/* <div  className="row justify-content-center banner-text">
                                    <div  className="col-md-10 m-b-20">
                                        <h1>The Only <span  className="text-info">Admin Template</span> needed for your all <span  className="text-info">Backend Needs</span> Don’t believe? Checkout Yourself</h1>
                                        <p  className="subtext"><span  className="font-medium">Bootstrap 4 </span>Admin Template + <span  className="font-medium">Angular 2/CLI starter kit</span>, <span  className="font-medium">Light &amp; Dark</span> Versions, Landing Page, <span  className="font-medium">6 Demo</span> Variations, <span  className="font-medium">5 Dashboard</span> Variations, <span  className="font-medium">100+</span> Integrated Plugins, <span  className="font-medium">600+</span> Pages, <span  className="font-medium">3000+</span> Font Icons, <span  className="font-medium">500+</span> UI Components &amp; much more...</p>
                                        <div  className="down-btn"> <a href="#demos"  className="btn btn-rounded btn-info m-b-10">VIEW DEMOS</a> <a href="https://wrappixel.com/templates/monsteradmin/"  className="btn btn-rounded btn-success m-b-10">BUY NOW</a> </div>
                                    </div>
                                </div> */}
                        {/* <Row className={}></Row> */}
                        {/* </div> */}
                        <div className="row light-blue">
                            <div className="col-md-12" id="demos">
                                <div className="fix-width">
                                    <div className="row text-center">
                                        {applies.map(data => {

                                            return (
                                                <Card  style={{ width: '18rem', margin:'20px 40px 20px 40px',borderRadius: '20px 20px 20px '}}>
                                                    <Card.Img  variant="top" src={data.image}  style={{ borderRadius: '50px 40px 50px '}}/>
                                                    <Card.Body>
                                                        <Card.Title>{data.title}</Card.Title>
                                                        <Card.Text>
                                                            {data.description}
                                                        </Card.Text>
                                                        <Button variant="primary">Show Detail Lamaran</Button>
                                                    </Card.Body>
                                                </Card>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>



                        {/* <footer  className="footer row">
                                <div  className="fix-width">
                                    <div  className="row">
                                        <div  className="col-lg-3 col-md-6"><img src="images/logo-light-icon.png" alt="logo" /> <img src="images/logo-light-text.png" alt="logo" />
                                            <p  className="m-t-30">
                                                <span  className="text-white">Monster Admin</span> is premium quality admin dashboard template with flat design. It is fully responsive admin dashboard template built with Bootstrap Framework, HTML5 & CSS3, Media query. </p>
                                        </div>
                                        <div  className="col-lg-3 col-md-6">
                                            <ul  className="footer-link list-icons">
                                                <li><a href="../minimal/index.html"><i  className="ti-angle-right"></i> Modern Dashboard</a></li>
                                                <li><a href="../minimal/index2.html"><i  className="ti-angle-right"></i> Awesome Dashboad</a></li>
                                                <li><a href="../minimal/index3.html"><i  className="ti-angle-right"></i>  classNamey Dashboad</a></li>
                                                <li><a href="../minimal/index4.html"><i  className="ti-angle-right"></i> Analytical Dashboard</a></li>
                                                <li><a href="../minimal/index5.html"><i  className="ti-angle-right"></i> Minimal Dashboard</a></li>
                                            </ul>
                                        </div>
                                        <div  className="col-lg-3 col-md-6">
                                            <ul  className="footer-link list-icons">
                                                <li><a href="../minimal/widget-apps.html"><i  className="ti-angle-right"></i> Widget Sections</a></li>
                                                <li><a href="../minimal/chart-chartist.html"><i  className="ti-angle-right"></i> Chart Options</a></li>
                                                <li><a href="../minimal/form-layout.html"><i  className="ti-angle-right"></i> Lots of Form Layouts</a></li>
                                                <li><a href="../minimal/table-data-table.html"><i  className="ti-angle-right"></i> Data Table Options</a></li>
                                                <li><a href="../minimal/index.html"><i  className="ti-angle-right"></i> Calendar Designs</a></li>
                                            </ul>
                                        </div>
                                        <div  className="col-lg-3 col-md-6">
                                            <ul  className="footer-link list-icons">
                                                <li><a href="../minimal/app-email.html"><i  className="ti-angle-right"></i> Inbox Layout</a></li>
                                                <li><a href="../minimal/pages-treeview.html"><i  className="ti-angle-right"></i> Tree View Options</a></li>
                                                <li><a href="../minimal/ui-carousel.html"><i  className="ti-angle-right"></i> Carousel Slider Option</a></li>
                                                <li><a href="../minimal/pages-gallery.html"><i  className="ti-angle-right"></i> Gallery Option</a></li>
                                                <li><a href="../minimal/starter-kit.html"><i  className="ti-angle-right"></i> Starter Pages</a></li>
                                            </ul>
                                        </div>
                                        <div  className="clearfix"></div>
                                        <div  className="col-md-12 sub-footer">
                                            <span>Copyright 2017. All Rights Reserved by <a  className="text-white" href="https://wrappixel.com/templates/monsteradmin/" target="_blank">Monster Admin</a></span>
                                            <span  className="pull-right">Design & Developed by <a  className="text-white" href="https://wrappixel.com" target="_blank">WrapPixel</a></span>
                                        </div>
                                    </div>
                                </div>
                            </footer> */}
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