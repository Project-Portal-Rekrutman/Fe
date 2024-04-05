import axios from "axios";
import { useState, useEffect } from "react";
import { Button, ButtonGroup, Form, Modal } from "react-bootstrap";
import useMessage from "../../../hooks/useMessage";
import { useDispatch, useSelector } from "react-redux";
import { apiUrl } from "../../../../custom/envcutom";
const ModalVacancy = (props) => {
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


    let msg = useMessage()

    const Handelchange = (e) => {
        const { name, value } = e.target

        setData({ ...data, [name]: value })
    }

    const getdetaildata = async (id) => {
        axios.get(`${apiUrl}vacancy/${id}`).then((response) => {
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
        }).catch((error) => {
            console.log(error.response)
            msg.error(error)
        })
    };

    const handleSubmit = () => {
        if (data.id) {
            axios.post(`${apiUrl}vacancy/${data.id}`, data)
                .then((response) => {
                    props.getData()
                    msg.success(response);
                    setData(
                        {
                            id:"",
                            image: "",
                            location: "",
                            salary: "",
                            jobType: "",
                            description: "",
                            qualification: "",
                            status: "",
                            title: ""
        
                        })
                    props.setShowModal(false);
                })
                .catch((error) => {
             
                    msg.error(error);
                });


        } else {
            axios.post(`${apiUrl}vacancy`, data)
                .then((response) => {
                    props.getData()
                    msg.success(response);
                    setData(
                        {
                            id:"",
                            image: "",
                            location: "",
                            salary: "",
                            jobType: "",
                            description: "",
                            qualification: "",
                            status: "",
                            title: ""
        
                        })
                    props.setShowModal(false);
                })
                .catch((error) => {
                    console.log("err insert",error.response)
                    msg.error(error);
                });
        }
    };

    useEffect(() => {
        if (props.selectedId) {
            getdetaildata(props.selectedId)
        } else {
            setData({
                id: "",
                image: "",
                label: ""
            });
        }
    }, [props.selectedId]);
    return (
        <>
            <Modal show={props.show} onHide={props.closeModal} size={"lg"} backdrop={"static"}> {/* Menggunakan onHide untuk menutup modal saat tombol close ditekan */}
                <Modal.Header >
                    <Modal.Title>{props.selectedId ? 'EDIT DEMO' : 'ADD DEMO'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
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
                            name={"title"}
                            onChange={Handelchange}
                            value={data.title}
                        />
                    </Form.Group>
                    <Form.Group className={"mb-3"}>
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            name={"description"}
                            onChange={Handelchange}
                            value={data.description}
                        />
                    </Form.Group>

                    <Form.Group className={"mb-3"}>
                        <Form.Label>Qualification</Form.Label>
                        <Form.Control
                            name={"qualification"}
                            onChange={Handelchange}
                            value={data.qualification}
                        />
                    </Form.Group>
                    <Form.Group className={"mb-3"}>
                        <Form.Label>Status</Form.Label>
                        <Form.Control
                            name={"status"}
                            onChange={Handelchange}
                            value={data.status}
                        />
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

                </Modal.Body>
                <Modal.Footer>
                    <ButtonGroup >

                        <Button onClick={props.closeModal} style={{ marginRight: '10px' }}>CANCEL</Button>
                        {props.selectedId? <Button onClick={handleSubmit}>Update</Button> : <Button onClick={handleSubmit}>SAVE</Button>}

                    </ButtonGroup>

                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalVacancy