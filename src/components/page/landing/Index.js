import "../../../static/bootstrap/css/bootstrap.min.css";
import "../../../static/assets/owl.carousel/owl.carousel.min.css";
import "../../../static/assets/owl.carousel/owl.theme.default.css";
import "../../../static/css/style.css";

let index = () => {
    return (
            <div className="fix-header">
                <div id="main-wrapper">
                    <header  className="topheader">
                        <div  className="fix-width">
                            <nav  className="navbar navbar-expand-md navbar-light">
                                <button  className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"> <span  className="navbar-toggler-icon"></span> </button>
                                <a  className="navbar-brand" href="index.html"><img src="images/monster-admin-logo.png" alt="admin template" /></a>
                                <div  className="collapse navbar-collapse" id="navbarNavDropdown">
                                    <ul  className="navbar-nav ml-auto stylish-nav">
                                        <li  className="nav-item dropdown"> <a  className="nav-link dropdown-toggle" href="" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Demos</a>
                                            <div  className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink"> <a  className="dropdown-item" href="../main/index2.html" target="_blank">Main</a> <a  className="dropdown-item" href="../minimal/index.html" target="_blank">Minimal</a> <a  className="dropdown-item" href="../dark/index3.html" target="_blank">Dark</a> <a  className="dropdown-item" href="../horizontal/index5.html" target="_blank">Horizontal</a> <a  className="dropdown-item" href="../minisidebar/index4.html" target="_blank">Minisidebar</a><a  className="dropdown-item" href="https://wrappixel.com/demos/admin-templates/monster-admin/angular2demo/dist/" target="_blank">Angular starter kit</a> <a  className="dropdown-item" href="../main-rtl/index.html" target="_blank">Main-RTL</a> </div>
                                        </li>
                                        <li  className="nav-item"> <a  className="nav-link" href="../Documentation/document.html" target="_blank">Documentation</a> </li>
                                        <li  className="nav-item"> <a  className="m-t-5 btn btn-rounded btn-outline-success" href="https://wrappixel.com/templates/monsteradmin/">BUY NOW</a> </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </header>
                    <div  className="page-wrapper">
                        <div  className="container-fluid">
                            <div  className="fix-width">
                                <div  className="row justify-content-center banner-text">
                                    <div  className="col-md-10 m-b-20">
                                        <h1>The Only <span  className="text-info">Admin Template</span> needed for your all <span  className="text-info">Backend Needs</span> Don’t believe? Checkout Yourself</h1>
                                        <p  className="subtext"><span  className="font-medium">Bootstrap 4 </span>Admin Template + <span  className="font-medium">Angular 2/CLI starter kit</span>, <span  className="font-medium">Light &amp; Dark</span> Versions, Landing Page, <span  className="font-medium">6 Demo</span> Variations, <span  className="font-medium">5 Dashboard</span> Variations, <span  className="font-medium">100+</span> Integrated Plugins, <span  className="font-medium">600+</span> Pages, <span  className="font-medium">3000+</span> Font Icons, <span  className="font-medium">500+</span> UI Components &amp; much more...</p>
                                        <div  className="down-btn"> <a href="#demos"  className="btn btn-rounded btn-info m-b-10">VIEW DEMOS</a> <a href="https://wrappixel.com/templates/monsteradmin/"  className="btn btn-rounded btn-success m-b-10">BUY NOW</a> </div>
                                    </div>
                                    <div  className="col-md-12">
                                        <div  className="hero-banner m-t-30"> <img src="images/hero.jpg"  className="img-responsive" alt="Monster admin template" /> </div>
                                    </div>
                                </div>
                            </div>
                            <div  className="row light-blue">
                                <div  className="col-md-12" id="demos">
                                    <div  className="text-center"> <small  className="text-info">The Most Complete Bootstrap Admin Template</small>
                                        <h2  className="display-7">Best Admin Template of 2017</h2>
                                        <p>Don’t go by our Words, checkout our awesome demos and verify yourself.
                                            <br />You will surely fall in love over the fresh design & brilliant code.</p>
                                    </div>
                                    <div  className="fix-width">
                                        <div  className="row text-center">
                                            <div  className="col-md-4 m-t-40">
                                                <div  className="image-box"> <img src="images/screen1.jpg" alt="demo1"  className="img-responsive" />
                                                    <div  className="image-overly"> <a  className="btn btn-rounded btn-info" href="../main/index2.html" target="_blank">Live Preview</a> </div>
                                                </div>
                                                <h5  className="p-20">Main Demo Version</h5> </div>
                                            <div  className="col-md-4 m-t-40">
                                                <div  className="image-box"> <img src="images/screen2.jpg" alt="demo1"  className="img-responsive" />
                                                    <div  className="image-overly"> <a  className="btn btn-rounded btn-info" href="../minimal/index.html" target="_blank">Live Preview</a> </div>
                                                </div>
                                                <h5  className="p-20">Minimal Demo Version</h5> </div>

                                            <div  className="col-md-4 m-t-40">
                                                <div  className="image-box"> <img src="images/screen4.jpg" alt="demo1"  className="img-responsive" />
                                                    <div  className="image-overly"> <a  className="btn btn-rounded btn-info" href="../minisidebar/index4.html" target="_blank">Live Preview</a> </div>
                                                </div>
                                                <h5  className="p-20">Analytical Demo Version</h5> </div>
                                            <div  className="col-md-4 m-t-40">
                                                <div  className="image-box"> <img src="images/screen5.jpg" alt="demo1"  className="img-responsive" />
                                                    <div  className="image-overly"> <a  className="btn btn-rounded btn-info" href="../horizontal/index5.html" target="_blank">Live Preview</a> </div>
                                                </div>
                                                <h5  className="p-20">Horizontal Demo Version</h5> </div>
                                            <div  className="col-md-4 m-t-40">
                                                <div  className="image-box"> <img src="images/screen3.jpg" alt="demo1"  className="img-responsive" />
                                                    <div  className="image-overly"> <a  className="btn btn-rounded btn-info" href="../dark/index3.html" target="_blank">Live Preview</a> </div>
                                                </div>
                                                <h5  className="p-20">Dark Demo Version</h5> </div>
                                            <div  className="col-md-4 m-t-40">
                                                <div  className="image-box"> <img src="images/screen8.jpg" alt="demo1"  className="img-responsive" />
                                                    <div  className="image-overly"> <a  className="btn btn-rounded btn-info" href="https://wrappixel.com/demos/admin-templates/monster-admin/angular2demo/dist/" target="_blank">Live Preview</a> </div>
                                                </div>
                                                <h5  className="p-20">Angular 2/CLI Starter Demo</h5> </div>
                                            <div  className="col-md-4 m-t-40">
                                                <div  className="image-box"> <img src="images/screen6.jpg" alt="demo1"  className="img-responsive" />
                                                    <div  className="image-overly"> <a  className="btn btn-rounded btn-info" href="../main-rtl/index.html" target="_blank">Live Preview</a> </div>
                                                </div>
                                                <h5  className="p-20">RTL Demo Version</h5> </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div  className="row white-space">
                                <div  className="col-md-12">
                                    <div  className="fix-width icon-section text-center"> <small  className="text-info">ALMOST COVERED EVERYTHING</small>
                                        <h2  className="display-7">Amazing Features & Flexibility Provided</h2>
                                        <div  className="row m-t-40">
                                            <div  className="col-lg-3 col-md-6"> <img src="images/color-skim.png" alt="Monster admin template" />
                                                <h4  className="font-500">6 Color Schemes</h4>
                                                <p>We have included 6 pre-defined color schemes with Monster Admin.</p>
                                            </div>
                                            <div  className="col-lg-3 col-md-6"> <img src="images/sidebars.png" alt="Monster admin template" />
                                                <h4  className="font-500">Dark &amp; Light Sidebar</h4>
                                                <p>Included Dark and Light Sidebar for getting desire look and feel.</p>
                                            </div>
                                            <div  className="col-lg-3 col-md-6"> <img src="images/pages.png" alt="Monster admin template" />
                                                <h4  className="font-500">700+ Page Templates</h4>
                                                <p>Yes, we have 6 demos &amp; 120+ Pages per demo to make it easier.</p>
                                            </div>
                                            <div  className="col-lg-3 col-md-6"> <img src="images/ui-component.png" alt="Monster admin template" />
                                                <h4  className="font-500">500+ UI Components</h4>
                                                <p>Almost 500+ UI Components being given with Monster Admin Pack.</p>
                                            </div>
                                        </div>
                                        <div  className="row m-t-40">
                                            <div  className="col-lg-3 col-md-6"> <img src="images/widgets.png" alt="Monster admin template" />
                                                <h4  className="font-500">Lots of Widgets</h4>
                                                <p>Wide range of Widgets are available with Monster Admin Package.</p>
                                            </div>
                                            <div  className="col-lg-3 col-md-6"> <img src="images/bootstraps.png" alt="Monster admin template" />
                                                <h4  className="font-500">Bootstrap 4x</h4>
                                                <p>Its been made with Bootstrap 4 and full responsive layout.</p>
                                            </div>
                                            <div  className="col-lg-3 col-md-6"> <img src="images/fonts.png" alt="Monster admin template" />
                                                <h4  className="font-500">3000+ Font Icons</h4>
                                                <p>Lots of Icon Fonts are included here in the package of Monster Admin.</p>
                                            </div>
                                            <div  className="col-lg-3 col-md-6"> <img src="images/respo.png" alt="Monster admin template" />
                                                <h4  className="font-500">Fully Responsive</h4>
                                                <p>All the layout of Monster Admin is Fully Responsive and widely tested.</p>
                                            </div>
                                        </div>
                                        <div  className="row m-t-40">
                                            <div  className="col-lg-3 col-md-6"> <img src="images/less.png" alt="Monster admin template" />
                                                <h4  className="font-500">SaSSBase CSS</h4>
                                                <p>Our Css is written Less Base to make your life easier.</p>
                                            </div>
                                            <div  className="col-lg-3 col-md-6"> <img src="images/customized.png" alt="Monster admin template" />
                                                <h4  className="font-500">Easy to Customize</h4>
                                                <p>Customization will be easy as we understand your pain.</p>
                                            </div>
                                            <div  className="col-lg-3 col-md-6"> <img src="images/charts.png" alt="Monster admin template" />
                                                <h4  className="font-500">Lots of Chart Options</h4>
                                                <p>You name it and we have it, Yes lots of variations for Charts.</p>
                                            </div>
                                            <div  className="col-lg-3 col-md-6"> <img src="images/multi-upload.png" alt="Monster admin template" />
                                                <h4  className="font-500">Mutiple File Uploads</h4>
                                                <p>You can upload multiple files with our Multiple selector.</p>
                                            </div>
                                        </div>
                                        <a href="https://wrappixel.com/templates/monsteradmin/"  className="btn btn-lg btn-success btn-rounded m-t-40"> Buy Monster Now</a>
                                    </div>
                                </div>
                            </div>
                            <div  className="row dual-bg">
                                <div  className="col-md-12">
                                    <div  className="fix-width">
                                        <div  className="row">
                                            <div  className="col-md-6"> <small  className="text-info">FOR MAIN DASHBOARD VERSION</small>
                                                <h2  className="text-white">Light Version of Monster Admin with<br /> Light & Dark Sidebar Option</h2> <img src="images/light-color-scheme.jpg" alt="image"  className="img-responsive m-t-30" /> </div>
                                            <div  className="col-md-6 text-right"> <small  className="text-info">FOR MAIN DASHBOARD VERSION</small>
                                                <h2  className="text-white">Light Version of Monster Admin with<br /> Light & Dark Sidebar Option</h2> <img src="images/dark-color-scheme.jpg" alt="image"  className="img-responsive m-t-30" /> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div  className="row white-space">
                                <div  className="col-md-12">
                                    <div  className="fix-width icon-section text-center"> <small  className="text-info">ALMOST COVERED EVERYTHING</small>
                                        <h2  className="display-7">We are proud on Features provided<br /> with Monster Template</h2>
                                        <div  className="row m-t-40">
                                            <div  className="col-lg-4 col-md-4"> <img src="images/tables.png" alt="Monster admin template" />
                                                <h4  className="font-500">Lots of Table Examples</h4>
                                                <p>Data Tables are initial requirement
                                                    <br />and we added them.
                                                </p>
                                            </div>
                                            <div  className="col-lg-4 col-md-4"> <img src="images/forms.png" alt="Monster admin template" />
                                                <h4  className="font-500">Validation Forms</h4>
                                                <p>Different Forms with Validation are
                                                    <br />included in pack. </p>
                                            </div>
                                            <div  className="col-lg-4 col-md-4"> <img src="images/e-com.png" alt="Monster admin template" />
                                                <h4  className="font-500">eCommerce Pages</h4>
                                                <p>Yes, all related e-Commerce
                                                    <br />pages are included. </p>
                                            </div>
                                        </div>
                                        <div  className="row m-t-40">
                                            <div  className="col-lg-4 col-md-4"> <img src="images/multi-level.png" alt="Monster admin template" />
                                                <h4  className="font-500">3 Level Dropdown Menu</h4>
                                                <p>We have added 3 Level Dropdown
                                                    <br />Menu in Elite Pack. </p>
                                            </div>
                                            <div  className="col-lg-4 col-md-4"> <img src="images/calendar.png" alt="Monster admin template" />
                                                <h4  className="font-500">Calendar Design</h4>
                                                <p>Calendar is available with our package
                                                    <br />&amp; in nice design. </p>
                                            </div>
                                            <div  className="col-lg-4 col-md-4"> <img src="images/gallery.png" alt="Monster admin template" />
                                                <h4  className="font-500">Gallery Options</h4>
                                                <p>Covered options to showcase different
                                                    <br />variation for gallery. </p>
                                            </div>
                                        </div>
                                        <div  className="row m-t-40">
                                            <div  className="col-lg-4 col-md-4"> <img src="images/docs.png" alt="Monster admin template" />
                                                <h4  className="font-500">Detailed Documentation</h4>
                                                <p>We have made detailed documentation,
                                                    <br />so it will easy to use. </p>
                                            </div>
                                            <div  className="col-lg-4 col-md-4"> <img src="images/dedicated.png" alt="Monster admin template" />
                                                <h4  className="font-500">Dedicated Support</h4>
                                                <p>We believe in supreme support is
                                                    <br />key and we offer that. </p>
                                            </div>
                                            <div  className="col-lg-4 col-md-4"> <img src="images/ragular.png" alt="Monster admin template" />
                                                <h4  className="font-500">Regular Updates</h4>
                                                <p>We are constantly updating our
                                                    <br />pack with new features. </p>
                                            </div>
                                        </div>
                                        <a href="https://wrappixel.com/templates/monsteradmin/"  className="btn btn-lg btn-success btn-rounded m-t-40"> Buy Monster Now</a>
                                    </div>
                                </div>
                            </div>
                            <div  className="row light-blue">
                                <div  className="col-md-12">
                                    <div  className="fix-width text-center"> <small  className="text-info">ALMOST COVERED EVERYTHING</small>
                                        <h2  className="display-7">What Real Buyers have to <br />Say about Monster Admin</h2>
                                        <div  className="tesimonial-box owl-carousel owl-theme" id="owl-demo2">
                                            <div  className="item">
                                                <p  className="testimonial-text"><b  className="font-500">The free version is incredible and it had everything I needed, however I bought this full template to support the developer. It’s a great, lightweight template which has loads of awesome little features and pre-made layouts to help kick-start your next admin panel, CMS, or CRM system. Keep up the good work!</b> </p>
                                                <div  className="username"><b>Nick Stanbridge<br /><small  className="text-danger"><i  className="fa fa-star"></i> <i  className="fa fa-star"></i> <i  className="fa fa-star"></i> <i  className="fa fa-star"></i> <i  className="fa fa-star"></i></small></b></div>
                                            </div>
                                            <div  className="item">
                                                <p  className="testimonial-text"><b  className="font-500">This front-end templates are very nice, very suitable for my background to do now, provide a lot of components for my use. Customer service is also very patient, very good, did not download the success of the beginning, and later also help me download finished, it is worth!</b> </p>
                                                <div  className="username"><b>Shinwu Ch<br /><small  className="text-danger"><i  className="fa fa-star"></i> <i  className="fa fa-star"></i> <i  className="fa fa-star"></i> <i  className="fa fa-star"></i> <i  className="fa fa-star"></i></small></b></div>
                                            </div>
                                            <div  className="item">
                                                <p  className="testimonial-text"><b  className="font-500">in my opinion, Monster Admin is a professional light-weight theme that will suit multiple projects types including MVC web-projects & dashboard-type user interface. I am yet to take a deep dive into the many features it offers. But from a first-hand experience, I would say it is really worth the money you pay for it… Go ahead & give it a try</b> </p>
                                                <div  className="username"><b>Mohammed Shameem<br /><small  className="text-danger"><i  className="fa fa-star"></i> <i  className="fa fa-star"></i> <i  className="fa fa-star"></i> <i  className="fa fa-star"></i> <i  className="fa fa-star"></i></small></b></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div  className="row">
                                <div  className="col-md-12 call-to-action bg-info">
                                    <div  className="fix-width">
                                        <div  className="row">
                                            <div  className="col-md-6 m-t-20 m-b-20"><span>Are you Satisfied with what we Offer?</span></div>
                                            <div  className="col-md-6 align-self-center text-right"><a href="https://wrappixel.com/templates/monsteradmin/" target="_blank"  className="btn btn-outline btn-rounded btn-default buy-btn m-t-10 m-b-10">BUY MONSTER ADMIN </a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <footer  className="footer row">
                                <div  className="fix-width">
                                    <div  className="row">
                                        <div  className="col-lg-3 col-md-6"><img src="images/logo-light-icon.png" alt="logo" /> <img src="images/logo-light-text.png" alt="logo" />
                                            <p  className="m-t-30">
                                                <span  className="text-white">Monster Admin</span> is premium quality admin dashboard template with flat design. It is fully responsive admin dashboard template built with Bootstrap Framework, HTML5 & CSS3, Media query. </p>
                                        </div>
                                        <div  className="col-lg-3 col-md-6">
                                            <ul  className="footer-link list-icons">
                                                <li><a href="../minimal/index.html"><i  className="ti-angle-right"></i> Modern Dashboard</a></li>
                                                <li><a href="../minimal/index2.html"><i  className="ti-angle-right"></i> Awesome Dashboad</a></li>
                                                <li><a href="../minimal/index3.html"><i  className="ti-angle-right"></i>  classNamey Dashboad</a></li>
                                                <li><a href="../minimal/index4.html"><i  className="ti-angle-right"></i> Analytical Dashboard</a></li>
                                                <li><a href="../minimal/index5.html"><i  className="ti-angle-right"></i> Minimal Dashboard</a></li>
                                            </ul>
                                        </div>
                                        <div  className="col-lg-3 col-md-6">
                                            <ul  className="footer-link list-icons">
                                                <li><a href="../minimal/widget-apps.html"><i  className="ti-angle-right"></i> Widget Sections</a></li>
                                                <li><a href="../minimal/chart-chartist.html"><i  className="ti-angle-right"></i> Chart Options</a></li>
                                                <li><a href="../minimal/form-layout.html"><i  className="ti-angle-right"></i> Lots of Form Layouts</a></li>
                                                <li><a href="../minimal/table-data-table.html"><i  className="ti-angle-right"></i> Data Table Options</a></li>
                                                <li><a href="../minimal/index.html"><i  className="ti-angle-right"></i> Calendar Designs</a></li>
                                            </ul>
                                        </div>
                                        <div  className="col-lg-3 col-md-6">
                                            <ul  className="footer-link list-icons">
                                                <li><a href="../minimal/app-email.html"><i  className="ti-angle-right"></i> Inbox Layout</a></li>
                                                <li><a href="../minimal/pages-treeview.html"><i  className="ti-angle-right"></i> Tree View Options</a></li>
                                                <li><a href="../minimal/ui-carousel.html"><i  className="ti-angle-right"></i> Carousel Slider Option</a></li>
                                                <li><a href="../minimal/pages-gallery.html"><i  className="ti-angle-right"></i> Gallery Option</a></li>
                                                <li><a href="../minimal/starter-kit.html"><i  className="ti-angle-right"></i> Starter Pages</a></li>
                                            </ul>
                                        </div>
                                        <div  className="clearfix"></div>
                                        <div  className="col-md-12 sub-footer">
                                            <span>Copyright 2017. All Rights Reserved by <a  className="text-white" href="https://wrappixel.com/templates/monsteradmin/" target="_blank">Monster Admin</a></span>
                                            <span  className="pull-right">Design & Developed by <a  className="text-white" href="https://wrappixel.com" target="_blank">WrapPixel</a></span>
                                        </div>
                                    </div>
                                </div>
                            </footer>
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
            </div>
    )
}

export default index;