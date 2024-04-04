import { useState } from "react";
import axios from "axios";

import useMessage from "../../hooks/useMessage";

let Index = (props) => {
    const [login, setLogin] = useState({
        email: "",
        password: ""
    })

    const message = useMessage();

    const handleChange  = (e) => {
        const { name, value } = e.target
        console.log(value)
        setLogin({ ...login, [name]: value })
    }

    const submit = (e) => {
        e.preventDefault();

        axios.request({
            method: "POST",
            url: "http://localhost:8080/api/account/authenticating",
            data: login
        })
        .then((response) => {
            message.success(response)
            console.log(response)
            setLogin({ email: "", password: ""});
        }).catch((error) => {
            message.error(error)
            console.log(error)
        })
    }

    return (
        <form className="form-horizontal form-material" id="loginform">
        <h3 className="box-title m-b-20">Sign In</h3>
        <div className="form-group ">
            <div className="col-xs-12">
                <input className="form-control" name="email" value={login.email} onChange={handleChange} type="text" required="" placeholder="Username" />
            </div>
        </div>
        <div className="form-group">
            <div className="col-xs-12">
                <input className="form-control" name="password" value={login.password} onChange={handleChange} type="password" required="" placeholder="Password" />
            </div>
        </div>
        <div className="form-group">
            <div className="col-md-12">
                <div className="checkbox checkbox-primary pull-left p-t-0">
                    <input id="checkbox-signup" type="checkbox" />
                    <label htmlFor="checkbox-signup"> Remember me </label>
                </div>
                <a href="#forgotpwd" id="to-recover" className="text-dark pull-right">
                    <i className="fa fa-lock m-r-5">Forgot pwd?</i> 
                </a>
            </div>
        </div>
        <div className="form-group text-center m-t-20">
            <div className="col-xs-12">
                <button className="btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light" type="submit" onClick={ (e) => submit(e) }>Log In</button>
            </div>
        </div>
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 m-t-10 text-center">
                <div className="social">
                    <a href="#facebook" className="btn  btn-facebook" data-toggle="tooltip" title="Login with Facebook">
                        <i aria-hidden="true" className="fa fa-facebook"></i>
                    </a>
                    <a href="#google" className="btn btn-googleplus" data-toggle="tooltip" title="Login with Google">
                        <i aria-hidden="true" className="fa fa-google-plus"></i>
                    </a>
                </div>
            </div>
        </div>
        <div className="form-group m-b-0">
            <div className="col-sm-12 text-center">
                <p>Don't have an account? <a href="register.html" className="text-info m-l-5"><b>Sign Up</b></a></p>
            </div>
        </div>
    </form>
    )
}

export default Index;