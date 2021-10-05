import logo from "../HomePage/logo.png";
import './Css/Movids.css'

function MovidsNavbar() {
    return(

    <nav className="navbar navbar-light bg-light">
        <div className="container-fluid2">
            <img src={logo} alt="logo" alt="" width="150" height="50"
                 className="d-inline-block align-text-top"/>
            <a className="navbar-brand2" href="#">Logout</a>
        </div>
        <div className="container-fluid">

            <a className="navbar-brand" href="#">Films</a>
            <a className="navbar-brand" href="#">Serials</a>
            <a className="navbar-brand" href="#">Rankings</a>

        </div>

    </nav>



    )
}
export default MovidsNavbar;