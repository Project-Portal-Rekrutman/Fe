import axios from "axios";
import { useState, useEffect } from "react";
import { Button, ButtonGroup, Col, Container, Form, Modal, Row } from "react-bootstrap";
import useMessage from "../../../hooks/useMessage";
import { useDispatch, useSelector } from "react-redux";
import { apiUrl } from "../../../../custom/envcutom";
import { useLocation, useNavigate } from "react-router-dom";
const FormVacancy = () => {
    const [data, setData] = useState({
        id: "",
        title: "",
        description: "",
        qualification: "",
        status: "",
        jobType: "",
        location: "",
        salary: 0,
        image: ""
    })

    let navigate = useNavigate()

    const { state } = useLocation()



    let msg = useMessage()

    const Handelchange = (e) => {
        const { name, value } = e.target

        setData({ ...data, [name]: value })
    }

    const getdetaildata = async () => {
        axios.get(`${apiUrl}vacancy/${state}`).then((response) => {
            setData(
                {
                    id: response.data.data.id,
                    image: response.data.data.image,
                    location: response.data.data.location,
                    salary: response.data.data.salary,
                    jobType: response.data.data.jobType,
                    description: response.data.data.description,
                    qualification: response.data.data.qualification,
                    status: response.data.data.status,
                    title: response.data.data.title

                })
            console.log(data.qualification, "test qualification")
        }).catch((error) => {
            console.log(error.response)
            msg.error(error)
        })
    };

    const handleSubmit = () => {
        if (data.id) {
            axios.post(`${apiUrl}vacancy/${data.id}`, data)

                .then((response) => {

                    msg.success(response);
                    setData(
                        {
                            id: "",
                            image: "",
                            location: "",
                            salary: "",
                            jobType: "",
                            description: "",
                            qualification: "",
                            status: "",
                            title: ""

                        })
                    navigate('/admin/vacancy')
                })
                .catch((error) => {

                    msg.error(error);
                });


        } else {
            axios.post(`${apiUrl}vacancy`, data)
                .then((response) => {

                    msg.success(response);
                    setData(
                        {
                            id: "",
                            image: "",
                            location: "",
                            salary: "",
                            jobType: "",
                            description: "",
                            qualification: "",
                            status: "",
                            title: ""

                        })
                    navigate('/admin/vacancy')
                })
                .catch((error) => {
                    console.log("err insert", error.response)
                    msg.error(error);

                });
        }
    };

    useEffect(() => {
        if (state) {
            getdetaildata(state)
        } else {
            setData({
                id: "",
                image: "",
                label: ""
            });
        }
    }, [state]);
    return (
        <>
            <Container>
                <Row>
                    <Col>

                        <Form.Group className={"mb-3"} style={{ display: "none" }}>
                            <Form.Label>ID</Form.Label>
                            <Form.Control
                                name={"id"}
                                onChange={Handelchange}
                                value={data.id}
                            />
                        </Form.Group>
                        <Form.Group className={"mb-3"}>
                            <Form.Label>Title</Form.Label>

                            <Form.Control
                                as="textarea"
                                rows={5}
                                name={"title"}
                                onChange={Handelchange}
                                value={data.title}
                            />
                        </Form.Group>
                        <Form.Group className={"mb-3"}>
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={5}
                                name={"description"}
                                onChange={Handelchange}
                                value={data.description}
                            />
                        </Form.Group>
                        <Form.Group className={"mb-3"}>
                            <Form.Label>Qualification</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={5}
                                name="qualification"
                                onChange={Handelchange}
                                value={data.qualification}
                            />
                        </Form.Group>

                        {/* <Form.Group className={"mb-3"}>
                            <Form.Label>Qualification</Form.Label>
                            <Form.Select name="qualification" value={data.qualification} onChange={Handelchange}>
                                <option value="" disabled hidden>Select education level</option>
                                <option value="SMA">SMA</option>
                                <option value="S1">S1</option>
                                <option value="S2">S2</option>
                                <option value="S3">S3</option>
                            </Form.Select>

                        </Form.Group> */}
                        <Form.Group className={"mb-3"}>
                            <Form.Label>Status</Form.Label>
                            <Form.Select name="status" value={data.status} onChange={Handelchange}  style={{padding:'0 20px', height:'80px', width:'100%'}} >
                                <option value="" disabled hidden>Select Status</option>
                                <option value="aktif">Aktif</option>
                                <option value="nonaktif">Non Aktif</option>
                            </Form.Select>
                            {/* <Form.Control
                                name={"status"}
                                onChange={Handelchange}
                                value={data.status}
                            /> */}
                        </Form.Group>

                        <Form.Group className={"mb-3"}>
                            <Form.Label>Job Type</Form.Label>
                            <Form.Control
                                name={"jobType"}
                                onChange={Handelchange}
                                value={data.jobType}
                            />
                        </Form.Group>

                        <Form.Group className={"mb-3"}>
                            <Form.Label>Image Url</Form.Label>
                            <Form.Control
                                name={"image"}
                                onChange={Handelchange}
                                value={data.image}
                            />
                        </Form.Group>

                        <Form.Group className={"mb-3"}>
                            <Form.Label>Salary</Form.Label>
                            <Form.Control
                                name={"salary"}
                                onChange={Handelchange}
                                value={data.salary}
                            />
                        </Form.Group>

                        <Form.Group className={"mb-3"}>
                            <Form.Label>Location</Form.Label>
                            <Form.Control
                                name={"location"}
                                onChange={Handelchange}
                                value={data.location}
                            />
                        </Form.Group>

                        <ButtonGroup >

                            <Button onClick={() => navigate('/admin/vacancy')} style={{ marginRight: '10px' }}>CANCEL</Button>
                            {state ? <Button onClick={handleSubmit}>Update</Button> : <Button onClick={handleSubmit}>SAVE</Button>}

                        </ButtonGroup>

                    </Col>
                </Row>
            </Container>


        </>
    )
}

export default FormVacancy