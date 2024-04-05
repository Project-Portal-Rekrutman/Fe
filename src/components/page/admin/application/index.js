import axios from "axios"

import { Button, Card, Col, Container, Row, Table } from "react-bootstrap"
import { useState, useEffect } from "react";
import { apiUrl } from "../../../../custom/envcutom.js";
import ModalInterview from "../../../organism/modal/interview_form"
const ListApplication = () => {

  const [listData, setListData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const getData = () => {
    const config = {
      headers: {
        Authorization: localStorage.getItem("user")
      }
    }
    axios.get(`${apiUrl}applies`, config).then((response) => {
      setListData(response.data.data)
      console.log(response.data.data);

    })
  }
  useEffect(() => {
    getData();
  }, [])

  const getIdApply = (data) => {
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
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Table responsive={true} striped={true} borderless={true}>
                  <thead>
                    <tr>
                      <th>Vacancy Title</th>
                      <th>Participant Name</th>
                      <th>Application Status</th>
                      <th>Application Date</th>
                      <th>Screening Status</th>
                      <th>Screening Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listData.map((value) => (
                      <tr key={value.id}>
                        <td>{value.vacancy.title}</td>
                        <td>{value.participant.user.name}</td>
                        <td>{value.appStatus}</td>
                        <td>{value.appDate}</td>
                        <td>{value.screeningStatus}</td>
                        <td>{value.screeningDate}</td>
                        <td>
                          <Button onClick={() => getIdApply(value.id)} style={{ marginRight: '20px' }}>Create Interview</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <ModalInterview show={showModal} closeModal={closeModal} setShowModal={setShowModal} selectedId={selectedId} />
      </Container>
  )
}

export default ListApplication;