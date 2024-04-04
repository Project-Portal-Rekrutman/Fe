import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ModalDemo from "../../../organism/modal/demo";
import Swal from 'sweetalert2';
import { apiUrl } from "../../../../custom/envcutom.js";

let Index = () => {
    const [showModal, setShowModal] = useState(false);
    const [editItemId, setEditItemId] = useState(null);
    const [list, setList] = useState([]);

    // useEffect(() => {
        
        useEffect(()=>{
            axios.get(`${apiUrl}interview`).then((response) => {
                setList(response.data.data)
                console.log(response.data.data)
            })
        },[])
    // })
}

export default Index;