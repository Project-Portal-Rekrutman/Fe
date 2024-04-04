import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ModalDemo from "../../../organism/modal/demo";
import Swal from 'sweetalert2';

let index = () => {
    const [showModal, setShowModal] = useState(false);
    const [editItemId, setEditItemId] = useState(null);

    useEffect(() => {
        axios.get(`http:localhost:8080/api/interview`);
        
    })
}