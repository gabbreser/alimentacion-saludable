import { Pages } from "configuration/constants";
import {
  genericMessages,
  homeMessages,
  orderMessages,
} from "configuration/messages";
import React, { useState } from "react";
import { NavLink, BrowserRouter, Link, useNavigate } from "react-router-dom";
import { platform, textstyles } from "styles";

interface MainProps {
  children?: React.ReactNode;
}

const Main = ({ children }: MainProps): JSX.Element => {
  const [expanded, setExpanded] = useState(false);

  const handleLink = (navData: { isActive: boolean }) => {
    return navData.isActive ? "active" : "";
  };

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL || Pages.HOMEPAGE}>
      <div className="Header">
        <a
          style={{ display: "flex" }}
          href={process.env.PUBLIC_URL || Pages.HOMEPAGE}>
          <img />
        </a>
        <div
          style={{
            width: "50px",
            height: "44px",
            marginRight: "8px",
            border: "1px solid rgba(255,255,255,0.3)",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            paddingTop: "3px",
            boxShadow: "0 2px 10px 0 rgba(0,0,0,0.3)",
          }}>
          <div
            className={`Header-Icon ${expanded ? "open" : ""}`}
            onClick={handleClick}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div className="Body">
        <div className={`Sidebar ${expanded ? "open" : ""}`}>
          <NavLink to={Pages.HOMEPAGE} className={handleLink}>
            <span>{homeMessages.access}</span>
          </NavLink>
          <NavLink to={Pages.ORDERSLISTPAGE} className={handleLink}>
            <span>{orderMessages.access}</span>
          </NavLink>
          <NavLink to={Pages.RECIPESLISTPAGE} className={handleLink}>
            <span>Recetas</span>
          </NavLink>
          <NavLink to={Pages.CONTACTPAGE} className={handleLink}>
            <span>Contacto</span>
          </NavLink>
        </div>
        <div className="Main">
          {children}
          <div className="Footer">
            <div className="Footer-Social">
              <span style={{ marginRight: "10px" }}>Seguinos</span>
              <a
                href="https://instagram.com/gabbreser?igshid=MzRlODBiNWFlZA=="
                target="_blank"
                title="Instagram"
                aria-label="Instagram"
                className="btn-social"
                rel="noreferrer">
                <svg
                  className="svg-inline--fa"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                </svg>
              </a>
            </div>
            <h4>{genericMessages.copyRight}</h4>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Main;
