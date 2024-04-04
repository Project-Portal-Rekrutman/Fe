import RegisterInput from "../../molecule/register";
import logoic from "../../../static/images/logo-icon.png";
import logote from "../../../static/images/logo-text.png";
import axios from "axios";
import { useState } from "react";
import messages from "../../hooks/useMessage"
import {Link, useNavigate} from "react-router-dom";

let Index = () => {

    const [register, setRegister] = useState({
        name: "",
        email: "",
        password: ""
    })

    let message = messages()

    const navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();

        axios.request({
            method: "POST",
            url: "http://localhost:8080/api/account/register-jobseeker",
            data: register
        }).then((response) => {
            console.log(response)
            message.success(response)
            setRegister({ name: "", email: "", password: ""});
            navigate('/');
        }).catch((error) => {
            console.log(error)
            message.error(error)
        })
    }

    let input = [
        {
            label: "Name",
            type: "text",
            name: "name",
            value: register.name,
            setter: setRegister
        },
        {
            label: "Email",
            type: "text",
            name: "email",
            value: register.email,
            setter: setRegister
        },
        {
            label: "Password",
            type: "password",
            name: "password",
            value: register.password,
            setter: setRegister
        }
    ]

    return (
        <form className="form-horizontal form-material" id="loginform" action="index.html">
            <a href="#" className="text-center db"><img src={logoic} alt="Home" /><br /><img src={logote} alt="Home" /></a>
            <h3 className="box-title m-t-40 m-b-0">Register Now</h3><small>Create your account and enjoy</small>
            {input.map((data,index) => {
                return (
                    <RegisterInput key={index} label={data.label} type={data.type} name={data.name} value={data.value} setter={data.setter} register={register}/>
                )
            })}
            <div className="form-group text-center m-t-20">
                <div className="col-xs-12">
                    <button className="btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light" type="submit" onClick={submit}>Sign Up</button>
                </div>
            </div>
            <div className="form-group m-b-0">
                <div className="col-sm-12 text-center">
                    <p>Already have an account? <Link  to={`/`} className={"text-decoration-none"}><b>Sign In</b></Link></p>
                </div>
            </div>
        </form>
    )
}

export default Index;