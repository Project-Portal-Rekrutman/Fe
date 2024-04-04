import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ModalDemo from "../../../organism/modal/demo";
import Swal from 'sweetalert2';
import { apiUrl } from "../../../../custom/envcutom.js";
import { Button, Card, Col, Container, Row, Table } from "react-bootstrap"

let Index = () => {
    const [showModal, setShowModal] = useState(false);
    const [editItemId, setEditItemId] = useState(null);
    const [list, setList] = useState([]);

    // useEffect(() => {

    useEffect(() => {
        axios.get(`${apiUrl}interview`).then((response) => {
            setList(response.data.data)
            console.log(response.data.data)
        })
    }, [])
    // })
    return (
        <Table responsive={true} striped={true} borderless={true}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Schedule</th>
                    <th>Interview Status</th>
                    <th>Interview Date</th>
                    <th>Interviewer</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {/* {list.map((value) => (
                    <tr key={value.id}>
                        <td>{value.title}</td>
                        <td>{value.description}</td>
                        <td>{value.qualification}</td>
                        <td>{value.salary}</td>
                        <td>{value.status}</td>
                        <td>{value.jobType}</td>
                        <Button style={{ marginRight: '20px' }}>Edit</Button>

                        <Button>Delete</Button>
                    </tr>
                ))} */}
            </tbody>
        </Table>
    )
}

export default Index;