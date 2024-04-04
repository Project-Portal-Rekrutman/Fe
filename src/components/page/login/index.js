import "../../../static/bootstrap/css/bootstrap.min.css";
import "../../../static/assets/owl.carousel/owl.carousel.min.css";
import "../../../static/assets/owl.carousel/owl.theme.default.css";
import "../../../static/css/style.css";
import Form from "../../organism/login";

let backgroundStyle = {
    backgroundImage: 'url("https://i.ibb.co/Ws42gtq/login-register.jpg")'
};

let Login = () => {
    return (
        <section id="wrapper">
            <div className="login-register" style={backgroundStyle}>
                <div className="login-box card">
                    <div className="card-body">
                        <Form />
                    </div>
                </div>
            </div>
            <script src="../../../static/js/jquery.min.js"></script>
            <script src="../../../static/bootstrap/js/tether.min.js"></script>
            <script src="../../../static/bootstrap/js/bootstrap.min.js"></script>
            <script src="../../../static/js/waves.js"></script>
            <script src="../../../static/js/sticky-kit.min.js"></script>
            <script src="../../../static/assets/owl.carousel/owl.carousel.min.js"></script>
            <script src="../../../static/js/custom.min.js"></script>
        </section>
    )
}

export default Login;