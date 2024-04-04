import "../../../static/admin/assets/plugins/bootstrap/css/bootstrap.min.css";
import "../../../static/admin/assets//plugins/chartist-js/dist/chartist.min.css";
import "../../../static/admin/assets//plugins/chartist-js/dist/chartist-init.css";
import "../../../static/admin/assets//plugins/chartist-plugin-tooltip-master/dist/chartist-plugin-tooltip.css";
import "../../../static/admin/assets//plugins/css-chart/css-chart.css";
import "../../../static/admin/assets//plugins/toast-master/css/jquery.toast.css";
import "../../../static/admin/css/style.css";
import "../../../static/admin/css/colors/blue.css";

import logoicon from "../../../static/admin/assets/images/logo-icon.png";
import logolighticon from "../../../static/admin/assets/images/logo-light-icon.png";
import logotext from "../../../static/admin/assets/images/logo-text.png";
import logolighttext from "../../../static/admin/assets/images/logo-light-text.png";
import profile from "../../../static/admin/assets/images/users/1.jpg";
import user from "../../../static/admin/assets/images/users/1.jpg";
import firstslide from "../../../static/admin/assets/images/big/img1.jpg";

import { Outlet, Link } from "react-router-dom";

const Index = ({children}) => {
    return (
        <body className="fix-header fix-sidebar card-no-border">
            <div id="main-wrapper">
                <header className="topbar">
                    <nav className="navbar top-navbar navbar-expand-md navbar-light">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="index.html">
                                <b>
                                    <i className="wi wi-sunset"></i>
                                    <img src={logoicon} alt="homepage" className="dark-logo" />
                                    <img src={logolighticon} alt="homepage" className="light-logo" />
                                </b>
                                <span>
                                    <img src={logotext} alt="homepage" className="dark-logo" />
                                    <img src={logolighttext} className="light-logo" alt="homepage" /></span> </a>
                        </div>
                        <div className="navbar-collapse">
                            <ul className="navbar-nav mr-auto mt-md-0 ">
                                <li className="nav-item"> <a className="nav-link nav-toggler hidden-md-up text-muted waves-effect waves-dark" href="#"><i className="ti-menu"></i></a> </li>
                                <li className="nav-item"> <a className="nav-link sidebartoggler hidden-sm-down text-muted waves-effect waves-dark" href="#"><i className="icon-arrow-left-circle"></i></a> </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle text-muted text-muted waves-effect waves-dark" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="mdi mdi-message"></i>
                                        <div className="notify"> <span className="heartbit"></span> <span className="point"></span> </div>
                                    </a>
                                    <div className="dropdown-menu mailbox animated bounceInDown">
                                        <ul>
                                            <li>
                                                <div className="drop-title">Notifications</div>
                                            </li>
                                            <li>
                                                <div className="message-center">
                                                    <a href="#">
                                                        <div className="btn btn-danger btn-circle"><i className="fa fa-link"></i></div>
                                                        <div className="mail-contnet">
                                                            <h5>Luanch Admin</h5> <span className="mail-desc">Just see the my new admin!</span> <span className="time">9:30 AM</span> </div>
                                                    </a>
                                                    <a href="#">
                                                        <div className="btn btn-success btn-circle"><i className="ti-calendar"></i></div>
                                                        <div className="mail-contnet">
                                                            <h5>Event today</h5> <span className="mail-desc">Just a reminder that you have event</span> <span className="time">9:10 AM</span> </div>
                                                    </a>
                                                    <a href="#">
                                                        <div className="btn btn-info btn-circle"><i className="ti-settings"></i></div>
                                                        <div className="mail-contnet">
                                                            <h5>Settings</h5> <span className="mail-desc">You can customize this template as you want</span> <span className="time">9:08 AM</span> </div>
                                                    </a>
                                                    <a href="#">
                                                        <div className="btn btn-primary btn-circle"><i className="ti-user"></i></div>
                                                        <div className="mail-contnet">
                                                            <h5>Pavan kumar</h5> <span className="mail-desc">Just see the my admin!</span> <span className="time">9:02 AM</span> </div>
                                                    </a>
                                                </div>
                                            </li>
                                            <li>
                                                <a className="nav-link text-center" href="#;"> <strong>Check all notifications</strong> <i className="fa fa-angle-right"></i> </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle text-muted waves-effect waves-dark" href="" id="2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="mdi mdi-email"></i>
                                        <div className="notify"> <span className="heartbit"></span> <span className="point"></span> </div>
                                    </a>
                                    <div className="dropdown-menu mailbox animated bounceInDown" aria-labelledby="2">
                                        <ul>
                                            <li>
                                                <div className="drop-title">You have 4 new messages</div>
                                            </li>
                                            <li>
                                                <div className="message-center">
                                                    <a href="#">
                                                        <div className="user-img"> <img src="../../../static/admin/assets/images/users/1.jpg" alt="user" className="img-circle" /><span className="profile-status online pull-right"></span> </div>
                                                        <div className="mail-contnet">
                                                            <h5>Pavan kumar</h5> <span className="mail-desc">Just see the my admin!</span> <span className="time">9:30 AM</span> </div>
                                                    </a>
                                                    <a href="#">
                                                        <div className="user-img"> <img src="../../../static/admin/assets/images/users/2.jpg" alt="user" className="img-circle" /><span className="profile-status busy pull-right"></span> </div>
                                                        <div className="mail-contnet">
                                                            <h5>Sonu Nigam</h5> <span className="mail-desc">I've sung a song! See you at</span> <span className="time">9:10 AM</span> </div>
                                                    </a>
                                                    <a href="#">
                                                        <div className="user-img"> <img src="../../../static/admin/assets/images/users/3.jpg" alt="user" className="img-circle" /> <span className="profile-status away pull-right"></span> </div>
                                                        <div className="mail-contnet">
                                                            <h5>Arijit Sinh</h5> <span className="mail-desc">I am a singer!</span> <span className="time">9:08 AM</span> </div>
                                                    </a>
                                                    <a href="#">
                                                        <div className="user-img"> <img src="../../../static/admin/assets/images/users/4.jpg" alt="user" className="img-circle" /> <span className="profile-status offline pull-right"></span> </div>
                                                        <div className="mail-contnet">
                                                            <h5>Pavan kumar</h5> <span className="mail-desc">Just see the my admin!</span> <span className="time">9:02 AM</span> </div>
                                                    </a>
                                                </div>
                                            </li>
                                            <li>
                                                <a className="nav-link text-center" href="#;"> <strong>See all e-Mails</strong> <i className="fa fa-angle-right"></i> </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item dropdown mega-dropdown"> <a className="nav-link dropdown-toggle text-muted waves-effect waves-dark" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="mdi mdi-view-grid"></i></a>
                                    <div className="dropdown-menu animated bounceInDown">
                                        <ul className="mega-dropdown-menu row">
                                            <li className="col-lg-3 col-xlg-2 m-b-30">
                                                <h4 className="m-b-20">CAROUSEL</h4>
                                                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                                    <div className="carousel-inner" role="listbox">
                                                        <div className="carousel-item active">
                                                            <div className="container"> <img className="d-block img-fluid" src={firstslide} alt="First slide" /></div>
                                                        </div>
                                                        <div className="carousel-item">
                                                            <div className="container"><img className="d-block img-fluid" src="../../../static/admin/assets/images/big/img2.jpg" alt="Second slide" /></div>
                                                        </div>
                                                        <div className="carousel-item">
                                                            <div className="container"><img className="d-block img-fluid" src="../../../static/admin/assets/images/big/img3.jpg" alt="Third slide" /></div>
                                                        </div>
                                                    </div>
                                                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev"> <span className="carousel-control-prev-icon" aria-hidden="true"></span> <span className="sr-only">Previous</span> </a>
                                                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next"> <span className="carousel-control-next-icon" aria-hidden="true"></span> <span className="sr-only">Next</span> </a>
                                                </div>
                                            </li>
                                            <li className="col-lg-3 m-b-30">
                                                <h4 className="m-b-20">ACCORDION</h4>
                                                <div id="accordion" className="nav-accordion" role="tablist" aria-multiselectable="true">
                                                    <div className="card">
                                                        <div className="card-header" role="tab" id="headingOne">
                                                            <h5 className="mb-0">
                                                                <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                                    Collapsible Group Item #1
                                                                </a>
                                                            </h5> </div>
                                                        <div id="collapseOne" className="collapse show" role="tabpanel" aria-labelledby="headingOne">
                                                            <div className="card-body"> Anim pariatur cliche reprehenderit, enim eiusmod high. </div>
                                                        </div>
                                                    </div>
                                                    <div className="card">
                                                        <div className="card-header" role="tab" id="headingTwo">
                                                            <h5 className="mb-0">
                                                                <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                                    Collapsible Group Item #2
                                                                </a>
                                                            </h5> </div>
                                                        <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo">
                                                            <div className="card-body"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div>
                                                        </div>
                                                    </div>
                                                    <div className="card">
                                                        <div className="card-header" role="tab" id="headingThree">
                                                            <h5 className="mb-0">
                                                                <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                                    Collapsible Group Item #3
                                                                </a>
                                                            </h5> </div>
                                                        <div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingThree">
                                                            <div className="card-body"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="col-lg-3  m-b-30">
                                                <h4 className="m-b-20">CONTACT US</h4>
                                                <form>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" id="exampleInputname1" placeholder="Enter Name" /> </div>
                                                    <div className="form-group">
                                                        <input type="email" className="form-control" placeholder="Enter email" /> </div>
                                                    <div className="form-group">
                                                        <textarea className="form-control" id="exampleTextarea" rows="3" placeholder="Message"></textarea>
                                                    </div>
                                                    <button type="submit" className="btn btn-info">Submit</button>
                                                </form>
                                            </li>
                                            <li className="col-lg-3 col-xlg-4 m-b-30">
                                                <h4 className="m-b-20">List style</h4>
                                                <ul className="list-style-none">
                                                    <li><a href="#"><i className="fa fa-check text-success"></i> You can give link</a></li>
                                                    <li><a href="#"><i className="fa fa-check text-success"></i> Give link</a></li>
                                                    <li><a href="#"><i className="fa fa-check text-success"></i> Another Give link</a></li>
                                                    <li><a href="#"><i className="fa fa-check text-success"></i> Forth link</a></li>
                                                    <li><a href="#"><i className="fa fa-check text-success"></i> Another fifth link</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                            <ul className="navbar-nav my-lg-0">
                                <li className="nav-item hidden-sm-down">
                                    <form className="app-search">
                                        <input type="text" className="form-control" placeholder="Search for..." /> <a className="srh-btn"><i className="ti-search"></i></a> </form>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle text-muted waves-effect waves-dark" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src={user} alt="user" className="profile-pic" /></a>
                                    <div className="dropdown-menu dropdown-menu-right animated flipInY">
                                        <ul className="dropdown-user">
                                            <li>
                                                <div className="dw-user-box">
                                                    <div className="u-img"><img src={user} alt="user" /></div>
                                                    <div className="u-text">
                                                        <h4>Steave Jobs</h4>
                                                        <p className="text-muted">varun@gmail.com</p><a href="profile.html" className="btn btn-rounded btn-danger btn-sm">View Profile</a></div>
                                                </div>
                                            </li>
                                            <li role="separator" className="divider"></li>
                                            <li><a href="#"><i className="ti-user"></i> My Profile</a></li>
                                            <li><a href="#"><i className="ti-wallet"></i> My Balance</a></li>
                                            <li><a href="#"><i className="ti-email"></i> Inbox</a></li>
                                            <li role="separator" className="divider"></li>
                                            <li><a href="#"><i className="ti-settings"></i> Account Setting</a></li>
                                            <li role="separator" className="divider"></li>
                                            <li><a href="#"><i className="fa fa-power-off"></i> Logout</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle text-muted waves-effect waves-dark" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="flag-icon flag-icon-us"></i></a>
                                    <div className="dropdown-menu  dropdown-menu-right animated bounceInDown"> <a className="dropdown-item" href="#"><i className="flag-icon flag-icon-in"></i> India</a> <a className="dropdown-item" href="#"><i className="flag-icon flag-icon-fr"></i> French</a> <a className="dropdown-item" href="#"><i className="flag-icon flag-icon-cn"></i> China</a> <a className="dropdown-item" href="#"><i className="flag-icon flag-icon-de"></i> Dutch</a> </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
                <aside className="left-sidebar">
                    <div className="scroll-sidebar">
                        <div className="user-profile">
                            <div className="profile-img"> <img src={profile} alt="user" /> </div>
                            <div className="profile-text"> <a href="#" className="dropdown-toggle link u-dropdown" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true">Markarn Doe <span className="caret"></span></a>
                                <div className="dropdown-menu animated flipInY">
                                    <a href="#" className="dropdown-item"><i className="ti-user"></i> My Profile</a>
                                    <a href="#" className="dropdown-item"><i className="ti-wallet"></i> My Balance</a>
                                    <a href="#" className="dropdown-item"><i className="ti-email"></i> Inbox</a>
                                    <div className="dropdown-divider"></div> <a href="#" className="dropdown-item"><i className="ti-settings"></i> Account Setting</a>
                                    <div className="dropdown-divider"></div> <a href="login.html" className="dropdown-item"><i className="fa fa-power-off"></i> Logout</a>
                                </div>
                            </div>
                        </div>
                        <nav className="sidebar-nav">
                            <ul id="sidebarnav">
                                <li className="nav-small-cap">PERSONAL</li>
                                <li>
                                    <Link to="/"><i className="mdi mdi-gauge"></i>Dashboard</Link>
                                    {/* <a className="has-arrow " href="#" aria-expanded="false"><i className="mdi mdi-gauge"></i><span className="hide-menu">Inbox</span></a>
                                    <ul aria-expanded="false" className="collapse">
                                        <li><a href="app-email.html">Mailbox</a></li>
                                        <li><a href="app-email-detail.html">Mailbox Detail</a></li>
                                        <li><a href="app-compose.html">Compose Mail</a></li>
                                    </ul> */}
                                </li>
                                <li>
                                    <Link to="/demo"><i className="mdi mdi-gauge"></i>Demo</Link>
                                </li>
                                <li>
                                    <Link to="/Rout"><i className="mdi mdi-gauge"></i>Route</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="sidebar-footer">
                        <a href="" className="link" data-toggle="tooltip" title="Settings"><i className="ti-settings"></i></a>
                        <a href="" className="link" data-toggle="tooltip" title="Email"><i className="mdi mdi-gmail"></i></a>
                        <a href="" className="link" data-toggle="tooltip" title="Logout"><i className="mdi mdi-power"></i></a>
                    </div>
                </aside>
                <div className="page-wrapper">
                    <div className="container-fluid">
                        {/* <Outlet /> */}
                        {/* content here */}
                        {children}
                    </div>
                    <footer className="footer">
                        © 2017 Monster Admin by wrappixel.com heheh
                    </footer>
                </div>
            </div>
            <script src="../../../static/admin/assets/plugins/jquery/jquery.min.js"></script>
            <script src="../../../static/admin/assets/plugins/bootstrap/js/popper.min.js"></script>
            <script src="../../../static/admin/assets/plugins/bootstrap/js/bootstrap.min.js"></script>
            <script src="../../../static/admin/js/jquery.slimscroll.js"></script>
            <script src="../../../static/admin/js/waves.js"></script>
            <script src="../../../static/admin/js/sidebarmenu.js"></script>
            <script src="../../../static/admin/assets/plugins/sticky-kit-master/dist/sticky-kit.min.js"></script>
            <script src="../../../static/admin/js/custom.min.js"></script>
            <script src="../../../static/admin/assets/plugins/chartist-js/dist/chartist.min.js"></script>
            <script src="../../../static/admin/assets/plugins/chartist-plugin-tooltip-master/dist/chartist-plugin-tooltip.min.js"></script>
            <script src="../../../static/admin/assets/plugins/echarts/echarts-all.js"></script>
            <script src="../../../static/admin/assets/plugins/toast-master/js/jquery.toast.js"></script>
            <script src="../../../static/admin/js/dashboard1.js"></script>
            <script src="../../../static/admin/js/toastr.js"></script>
            {/* <script>
                $.toast({
                    heading: 'Welcome to Monster admin',
                text: 'Use the predefined ones, or specify a custom position object.',
                position: 'top-right',
                loaderBg:'#ff6849',
                icon: 'info',
                hideAfter: 3000,
                stack: 6
        });
            </script> */}
            <script src="../../../static/admin/assets/plugins/styleswitcher/jQuery.style.switcher.js"></script>

        </body>
    )
}

export default Index;

