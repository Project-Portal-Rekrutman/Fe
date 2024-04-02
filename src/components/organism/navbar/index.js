let index = (props) => {
    return (
        <nav className="navbar navbar-expand-md navbar-light">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
            <a className="navbar-brand" href="index.html"><img src={props.logo} alt="admin template" /></a>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ml-auto stylish-nav">
                    <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle" href="" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Demos</a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink"> <a className="dropdown-item" href="../main/index2.html" target="_blank">Main</a> <a className="dropdown-item" href="../minimal/index.html" target="_blank">Minimal</a> <a className="dropdown-item" href="../dark/index3.html" target="_blank">Dark</a> <a className="dropdown-item" href="../horizontal/index5.html" target="_blank">Horizontal</a> <a className="dropdown-item" href="../minisidebar/index4.html" target="_blank">Minisidebar</a><a className="dropdown-item" href="https://wrappixel.com/demos/admin-templates/monster-admin/angular2demo/dist/" target="_blank">Angular starter kit</a> <a className="dropdown-item" href="../main-rtl/index.html" target="_blank">Main-RTL</a> </div>
                    </li>
                    <li className="nav-item"> <a className="nav-link" href="../Documentation/document.html" target="_blank">Documentation</a> </li>
                    <li className="nav-item"> <a className="m-t-5 btn btn-rounded btn-outline-success" href="https://wrappixel.com/templates/monsteradmin/">BUY NOW</a> </li>
                </ul>
            </div>
        </nav>
    )
}

export default index;
