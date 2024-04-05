import axios from "axios";
import { Button, Card, Col, Container, Row, Table } from "react-bootstrap";
import { useState, useEffect } from "react";
import { apiUrl } from "../../../../custom/envcutom.js";
import { FaCheck, FaTimes } from 'react-icons/fa';

const ListApplication = () => {
    const [listData, setListData] = useState([]);
    const [checklistStatus, setChecklistStatus] = useState({});
    const [isButtonActive, setIsButtonActive] = useState(false);

    const getData = () => {
        const config = {
            headers: {
                Authorization: localStorage.getItem("user")
            }
        };
        axios.get(`${apiUrl}applies`, config).then((response) => {
            setListData(response.data.data);
            console.log(response.data.data);
        }).catch((error) => {
            console.error("Error fetching application data:", error);
        });
    };

    useEffect(() => {
        getData();
    }, []);

    const handleButtonActivate = () => {
        setIsButtonActive(true); // Mengaktifkan tombol checklist dan silang
    };

    const handleChecklistClick = (id, status, appstatus) => {
        setChecklistStatus(prevState => ({
            ...prevState,
            [id]: true
        }));

        // Update screening status based on the button value
        axios.post(`${apiUrl}screening/update`, {
            id: id,
            screeningStatus: status,
            appStatus: appstatus
        })
            .then((response) => {
                console.log("Screening status updated successfully:", response.data);
                getData();
            })
            .catch((error) => {
                console.error("Error updating screening status:", error);
            });
    };

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Table responsive striped borderless>
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
                                                    <Button
                                                        style={{ marginRight: '10px' }}
                                                        onClick={handleButtonActivate} // Mengaktifkan tombol checklist dan silang
                                                        disabled={isButtonActive} // Tombol akan dinonaktifkan jika tombol aktif
                                                    >
                                                        CV
                                                    </Button>
                                                    <Button
                                                        style={{ marginRight: '10px' }}
                                                        onClick={() => handleChecklistClick(value.id, 'Accepted', 'Done')}
                                                        disabled={!isButtonActive} // Memanggil fungsi saat tombol checklist ditekan

                                                    >
                                                        <FaCheck />
                                                    </Button>
                                                    <Button style={{ marginRight: '10px' }}
                                                        onClick={() => handleChecklistClick(value.id, 'Rejected', 'Done')}
                                                        disabled={!isButtonActive}
                                                    >
                                                        <FaTimes />
                                                    </Button>
                                                    {checklistStatus[value.id] && value.screeningStatus === 'Accepted' && (
                                                        <Button>Create Interview</Button>
                                                    )}
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
    );
};

export default ListApplication;
