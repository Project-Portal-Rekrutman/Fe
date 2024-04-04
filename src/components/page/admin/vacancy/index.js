import axios from "axios"

import { Button, Card, Col, Container, Row, Table } from "react-bootstrap"
import { useState, useEffect } from "react";
import { apiUrl } from "../../../../custom/envcutom.js";
import ModalVacancy from "../../../organism/modal/vacancy/index.js";
import useMessage from "../../../hooks/useMessage.jsx";
const ListVacancy = () => {
    let msg = useMessage()
    const [listData, setListData] = useState([])
    const [showModal, setShowModal] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    const getData = () => {
        axios.get(`${apiUrl}vacancys`).then((response) => {
            setListData(response.data.data)

            console.log(response.data.data)

        })

    }
    const openModal = () => {
        setShowModal(true);
      };
    
      const closeModal = () => {
        setSelectedId(null)
        setShowModal(false);
      };

      const getDemoById = (id) => {
        setSelectedId(id);
        setShowModal(true);
      }
    useEffect(() => {
        getData()
    })
    const deleteById = (id) => {
        msg.confirmRemove(() => {
          console.log("ini id", id)
          axios.delete(`${apiUrl}vacancy/${id}`).then((response) => {
            msg.success(response)
           getData()
          }).catch((error) => {
            msg.error(error)
          })
        })
    
      }

    return (
        <>
            <Container>
                <Row>
                    <Col>
                    <Button  style={{marginBottom:'20px'}}  onClick={openModal}>CREATE</Button>
                        <Card>
                            <Card.Body>
                                <Table  responsive={true} striped={true} borderless={true}>
                                    <thead>
                                        <tr>
                                            <th>Title</th>
                                            <th>Description</th>
                                            <th>Qualification</th>
                                            <th>Salary</th>
                                            <th>Status</th>
                                            <th>Job Type</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {listData.map((value) => (
                                            <tr key={value._id}>
                                                <td>{value.title}</td>
                                                <td>{value.description}</td>
                                                <td>{value.qualification}</td>
                                                <td>{value.salary}</td>
                                                <td>{value.status}</td>
                                                <td>{value.jobType}</td>
                                                <Button  style={{marginRight:'20px'}} onClick={() => getDemoById(value.id)}>Edit</Button>

                                                <Button onClick={() => deleteById(value.id)}>Delete</Button>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <ModalVacancy show={showModal} closeModal={closeModal}  setShowModal={setShowModal} selectedId={selectedId} getData={getData}  />
            </Container>

        </>
    )
}

export default ListVacancy