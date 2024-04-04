import axios from "axios";
import { useState, useEffect } from "react";
import { Button, ButtonGroup, Form, Modal } from "react-bootstrap";
import useMessage from "../../../hooks/useMessage";
import { useDispatch, useSelector } from "react-redux";
// import { CreateData, UpdateId, getDemos, getDemosId } from "../../../../features/demo";
import { apiUrl } from "../../../../custom/envcutom";
import { useNavigate } from "react-router-dom";
const ModalDemo = (props) => {
    const [data, setData] = useState({
        id: "",
        image: "",
        label: ""
    })
    const navigate = useNavigate()

    let msg = useMessage()

  

 

    const handleSubmit = () => {
        const config = {
            headers: {
              Authorization: localStorage.getItem("user")
            }
          }
       axios.post(`${apiUrl}send/application?jobid=${props.selectedDetail}`,null,config).then((response)=>{
        msg.success(response)
        props.setShowModal(false)
        navigate("/landing")
       }).catch((error)=>{
        msg.error(error)
       })
    };

    useEffect(() => {
        
    }, [props.selectedDetail]);

    return (
        <Modal show={props.show} onHide={props.closeModal} size={"lg"} backdrop={"static"}> {/* Menggunakan onHide untuk menutup modal saat tombol close ditekan */}
          
            <Modal.Body>
                Anda yakin Mengirim lamaran {props.selectedDetail}???
            </Modal.Body>
            <Modal.Footer>
                <ButtonGroup >

                    <Button onClick={props.closeModal} style={{ marginRight: '10px' }}>CANCEL</Button>
                   <Button onClick={handleSubmit}>Send</Button> 

                </ButtonGroup>

            </Modal.Footer>
        </Modal>
    );
};

export default ModalDemo;
