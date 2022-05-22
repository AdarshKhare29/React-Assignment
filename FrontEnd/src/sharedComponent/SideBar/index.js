import { useState } from "react"

const SideBar = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <div id="layoutSidenav_nav">
            <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                <div className="sb-sidenav-menu">
                    <div className="nav">
                        <div className="sb-sidenav-menu-heading">Core</div>
                        <a className="nav-link" href="index.html">
                            <div className="sb-nav-link-icon"><i className="fa fa-tachometer-alt"></i></div>
                            Dashboard
                        </a>
                        <div className="sb-sidenav-menu-heading">Interface</div>
                        <a className={`nav-link ${toggle ? '' : 'collapsed'}`} href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded={`${toggle ? 'true' : 'false'}`} aria-controls="collapseLayouts" onClick={() => setToggle(!toggle)}>
                            <div className="sb-nav-link-icon"><i className="fa fa-columns"></i></div>
                            Layouts
                            <div className="sb-sidenav-collapse-arrow"><i className="fa fa-angle-down"></i></div>
                        </a>
                        <div className={`collapse ${toggle ? 'show' : ''}`} id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                            <nav className="sb-sidenav-menu-nested nav">
                                <a className="nav-link" href="#!">Static Navigation</a>
                                <a className="nav-link" href="#!">Light Sidenav</a>
                            </nav>
                        </div>


                    </div>
                </div>
                <div className="sb-sidenav-footer">
                    <div className="small">Logged in as:</div>
                    Start Bootstrap
                </div>
            </nav>
        </div>

    )
}
export default SideBar