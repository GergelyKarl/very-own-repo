import React from "react";
import "./HeaderTop.css";
import MenuIcon from "@material-ui/icons/Menu";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import PersonIcon from "@material-ui/icons/Person";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const HeaderTop = () => {
  return (
    <div className="header__top">
      <div className="header__left">
        <div className="header__rovatok">
          <MenuIcon />
          <a href="#">ROVATOK</a>
        </div>
        <div className="header__legfrissebb">
          <AccessTimeIcon />
          <a href="#">Legfrissebb</a>
        </div>
      </div>
      <div className="header__right">
        <div className="header__oldalak">
          <a href="https://cimlap.blog.hu/" target="_blank">
            !B Címlap
          </a>
          <a href="#">Totalcar</a>
          <a href="#">JóAutók</a>
          <a href="#">Dívány</a>
          <a href="#">Femina</a>
          <a href="#">Inda</a>
          <ExpandMoreIcon />
          <a href="#">Ingatlantájoló</a>
          <a href="#">Jobinfo</a>
        </div>
        <div className="header__ikonok">
          <div className="header__ikon">
            <SearchIcon />
          </div>
          <div className="header__ikon">
            <NotificationsIcon />
          </div>
          <div className="header__ikon">
            <PersonIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
