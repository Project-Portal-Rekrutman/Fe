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
import ModalEducation from "../../organism/modal/education/index.js";
import { Link, useNavigate } from "react-router-dom";

const ListEducation = () => {

    const [listData, setListData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedId, setSelectedId] = useState(null);

    const getData = () => {
        axios.get(`${apiUrl}educations`).then((response) => {
            setListData(response.data.data)
            console.log(response.data.data);
        })
    }

    useEffect(() => {
        getData();
    }, [])

    const getIdParticipantEducation = (data) => {
        setSelectedId(data);
        setShowModal(true);
      }

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedId(null);
    };


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
                                        {listData.map((value) => {

                                            return (
                                                <Card style={{ width: '18rem', margin: '20px 40px 20px 40px', borderRadius: '20px 20px 20px ' }} >
                                                    {/* <Card.Img variant="top" src={data.image} style={{ borderRadius: '50px 40px 50px ' }} /> */}
                                                    <Card.Body>
                                                        <Card.Title>Education</Card.Title>
                                                        <Card.Text>
                                                            {value.name_univ}
                                                        </Card.Text>
                                                        <Card.Text>
                                                            {value.name_major}
                                                        </Card.Text>
                                                        <Card.Text>
                                                            {value.name_degree}
                                                        </Card.Text>
                                                        <Card.Text>
                                                            {value.gpa}
                                                        </Card.Text>
                                                    </Card.Body>
                                                    <td>
                                                        <Button onClick={() => getIdParticipantEducation(value.id)} style={{ marginRight: '20px' }}>Create Education</Button>
                                                    </td>
                                                </Card>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ModalEducation show={showModal} closeModal={closeModal} setShowModal={setShowModal} selectedId={selectedId} />
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

export default ListEducation;