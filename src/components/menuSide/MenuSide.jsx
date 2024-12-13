import "./MenuSide.css";
import { Link } from "react-router";
import { IoHome } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { LuUsers} from "react-icons/lu";
import { FaClipboardList ,FaChartBar  } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { IoMdSettings , IoIosLogOut } from "react-icons/io";
import { TbLogs } from "react-icons/tb";
import { BsFileEarmarkPost } from "react-icons/bs";


const menuData = [
  {
    title: "Main",
    items: [
      { to: "/", icon: <IoHome />, label: "Home Page" },
      { to: "/", icon: <CgProfile />, label: "Profile" },
    ],
  },
  {
    title: "Lists",
    items: [
      { to: "/users", icon: <LuUsers />, label: "Users" },
      { to: "/products", icon: <AiFillProduct />, label: "Products" },
      { to: "/", icon: <FaClipboardList />, label: "Orders" },
      { to: "/", icon: <BsFileEarmarkPost />, label: "Posts" },
    ],
  },
  {
    title: "Analytics",
    items: [
      { to: "/", icon: <FaChartBar />, label: "Charts" },
      { to: "/", icon: <TbLogs />, label: "Logs" },
    ],
  },
  {
    title: "Maintenance",
    items: [
      { to: "/", icon: <IoMdSettings />, label: "Settings" },
      { to: "/", icon: <IoIosLogOut />, label: "Logout" },
    ],
  },
];

const MenuSide = () => {
  return (
    <div className="menuSide-container">
      {menuData.map((menu, index) => (
        <div className="menu-item" key={index}>
          <span className="menu-title">{menu.title}</span>
          {menu.items.map((item, idx) => (
            <Link to={item.to} className="list-item" key={idx}>
              {item.icon}
              <span className="list-item-title">{item.label}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MenuSide;