import axios from "axios"

import { Button, Card, Col, Container, Row, Table } from "react-bootstrap"
import { useState, useEffect } from "react";
import { apiUrl } from "../../../../custom/envcutom.js";
const ListInterview = () => {

    const [listData, setListData] = useState([])

    const getData = () => {

      axios.get(`${apiUrl}interview`).then((response) => {
          setListData(response.data.data)
          console.log(response.data.data);
      })
  }
  useEffect(() => {
      getData();
  }, [])

  let changeFormat = (data) => {
    let formattedString = data.replace('T', ' ');
    return formattedString;
  }

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Table  responsive={true} striped={true} borderless={true}>
                                    <thead>
                                        <tr>
                                            <th>Jobseeker Name</th>
                                            <th>Schedule</th>
                                            <th>Location</th>
                                            <th>Interviewer Name</th>
                                            <th>Interview Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {listData.map((value) => (
                                            <tr key={value.id}>
                                                <td>{value.apply.participant.user.name}</td>
                                                <td>{changeFormat(value.schedule)}</td>
                                                <td>{value.location}</td>
                                                <td>{value.inteviewerName}</td>
                                                <td>{value.interviewStatus}</td>
                                                <td>
                                                  <Button style={{marginRight:'20px'}}>Grade Score</Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default ListInterview;
