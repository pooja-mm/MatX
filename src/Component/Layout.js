import { Outlet, Link } from "react-router-dom";
import "../Css/index.scss";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonIcon from "@mui/icons-material/Person";
import AdjustSharpIcon from "@mui/icons-material/AdjustSharp";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";
import StarRateOutlinedIcon from "@mui/icons-material/StarRateOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
const Layout = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="navbar p-0">
        <div className="d-block">
          <a href="#">
            <MenuOutlinedIcon />
          </a>
          <a href="#">
            <EmailOutlinedIcon />
          </a>
          <a href="#">
            <CheckBoxOutlineBlankOutlinedIcon />
          </a>
          <a href="#">
            <StarRateOutlinedIcon />
          </a>
        </div>
        <div>
          <a href="#">
            <SearchOutlinedIcon />
          </a>
          <a href="#">
            <NotificationsNoneOutlinedIcon />
          </a>
          <a href="#">
            <ShoppingCartOutlinedIcon />
          </a>
          <a href="#">
            <AccountCircleIcon />
          </a>
        </div>
      </div>
      <nav className="sidenav">
        <h6 className="header">
          <BookmarkIcon />
          <span>Matx</span>
          <CircleOutlinedIcon />
        </h6>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/analytics">Analytics</Link>
          </li>
          <li>
            <Link to="/alternative">Alternative</Link>
          </li>
          <li>
            <Link to="/inventory">Inventory Management</Link>
          </li>
          <h5 className="pages">PAGES</h5>
          <li>
            <div className={open ? "sidebar-item open" : "sidebar-item"}>
              <div className="sidebar-title">
                <a onClick={() => setOpen(!open)}>
                  <PersonIcon /> <span>Customers</span>
                  <ExpandMoreIcon />
                </a>
              </div>

              <ul className="subsidebarmenu">
                <li>
                  <div className="sidebar-content">
                    <Link to="/customerList">
                      <AdjustSharpIcon />
                      <span>Customer List</span>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="sidebar-content">
                    <Link to="/viewcustomer">
                      <AdjustSharpIcon />
                      <span>View Customer</span>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="sidebar-content">
                    <Link to="/newcustomer">
                      <AdjustSharpIcon />
                      <span>New Customer</span>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li>New cus</li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
