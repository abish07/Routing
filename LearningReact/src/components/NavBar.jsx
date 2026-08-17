import { Link, NavLink } from "react-router-dom";

function NavBar(){
    return(
        <nav>
            <div className="logo">
                <h1>logo</h1>
            </div>
            <ul>
                <NavLink to="/"><li>Home</li></NavLink>
                <NavLink to="/About"><li>About Us</li></NavLink>
                <NavLink to="/Services"><li>Services</li></NavLink>
                <NavLink to="/Contact"><li>Contact Us</li></NavLink>
            </ul>
        </nav>
    )
}
export default NavBar;