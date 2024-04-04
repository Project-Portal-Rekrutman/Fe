import axios from "axios"

import { Button, Card, Col, Container, Row, Table } from "react-bootstrap"
import { useState, useEffect } from "react";
import { apiUrl } from "../../../../custom/envcutom.js";
const ListVacancy = () => {

    const [listData, setListData] = useState([])

    const getData = () => {
        axios.get(`${apiUrl}vacancys`).then((response) => {
            setListData(response.data.data)

            console.log(response.data.data)

        })

    }

    useEffect(() => {
        getData()
    })

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
                                                <Button style={{marginRight:'20px'}}>Edit</Button>

                                                <Button>Delete</Button>
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

export default ListVacancy