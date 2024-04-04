// import { useState } from "react";

let index = (props) => {
    const handleChanges = (e) => {
        const {name, value} = e.target
        props.setter({...props.register,[name]: value})
    }

    return (
        <div className="form-group m-t-20" >
            <div className="col-xs-12">
                <label>{props.label}</label>
                <input className="form-control" type={props.type} name={props.name} required="" onChange={handleChanges} value={props.value}></input>
            </div>
        </div >
    )
}

export default index;