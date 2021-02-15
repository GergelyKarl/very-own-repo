import React from "react";
import "./HeaderMiddle.css";
import Logo from "../assets/logo.png";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import CloudQueueOutlinedIcon from "@material-ui/icons/CloudQueueOutlined";
import MarkunreadMailboxIcon from "@material-ui/icons/MarkunreadMailbox";
import RssFeedIcon from "@material-ui/icons/RssFeed";
import FacebookIcon from "@material-ui/icons/Facebook";

const HeaderMiddle = () => {
  return (
    <div className="header__middle">
      <div className="wrapper">
        <div className="header__middle__top">
          <div className="header__middle__left">
            <div className="header__middle__logo">
              <img src={Logo} alt="index logo" />
            </div>
            <div className="header__middle__label">
              <h4 className="label__blue">Koronavírus</h4>
              <h4 className="label__green">Zöld-index</h4>
            </div>
          </div>
          <div className="header__middle__right">
            <div className="header__middle__nevnap">
              <p>2021.02.02 Kedd</p>
              <p>Karolina, Aida</p>
            </div>
            <div className="header__middle__arfolyam__wrapper">
              <div className="header__middle__arfolyam__eur">
                <p>EUR 355,52 Ft </p>
                <ArrowDropDownIcon />
              </div>
              <div className="header__middle__arfolyam__gbp">
                <p>GBP 403,52 Ft </p>
                <ArrowDropDownIcon />
              </div>
            </div>
            <div className="header__middle__idojaras">
              <div className="header__middle__idojaras__celsius">
                <p> -3 &#8451;</p>
                <p> +4 &#8451;</p>
              </div>
              <div className="header__middle__idojaras__piktogram">
                <CloudQueueOutlinedIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="header__middle__bottom">
          <div className="header__middle__categories">
            <div className="header__middle__categories__left">
              <a href="#">Belföld</a>
              <a href="#">Külföld</a>
              <a href="#">Gazdaság</a>
              <a href="#">Kult</a>
              <a href="#">Tech-tud</a>
              <a href="#">Sport</a>
              <a href="#">Vélemény</a>
              <a href="#">Blog</a>
              <a href="#">Videó</a>
              <a href="#">Fotó</a>
              <a href="#">24 Óra</a>
            </div>
            <div className="header__middle__categories__right">
              <div className="header__middle__categories__social">
                <MarkunreadMailboxIcon />
                <div>
                  <RssFeedIcon />
                  <FacebookIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMiddle;
