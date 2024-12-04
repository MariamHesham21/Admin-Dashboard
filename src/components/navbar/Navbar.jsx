import "./Navbar.css";
import { FaSearch } from "react-icons/fa";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { IoIosNotifications } from "react-icons/io";
import photo1 from "../../assets/images/photo1.jpg"

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="logo-container">
        <h3>Admin Dashboard</h3>
      </div>
      <div className="icons-container">
        <FaSearch className="navbar-icon"/>
        <HiMiniSquares2X2 className="navbar-icon"/>
        <div className="notification-icon-container">
          <IoIosNotifications className="navbar-icon" style={{fontSize:"24px"}}/>
          <span>1</span>
        </div>
        <div className="user-container">
          <img src={photo1} alt="user-img" className="user-img-navbar"/>
          <span>Mary</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
