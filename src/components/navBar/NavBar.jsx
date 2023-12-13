import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";
import { logoutUserService } from "../../services/userServices";
import { FaCircleUser } from "react-icons/fa6";
import { IoExitSharp } from "react-icons/io5";

import { useAuthContext } from "../../context/AuthContext";

export default function NavBar() {
  const { user, isAuth } = useAuthContext();

  return (
    <nav className="nav">
      <div className="nav__logo">Logo</div>

      <div className="nav__options">
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          {isAuth ? (
            <li>
              <div className="userStyle">
                <FaCircleUser />
                <span>Joel</span>
              </div>
            </li>
          ) : (
            <>
              <li>
                <NavLink to={"/login"}>Ingresa</NavLink>
              </li>
              <li>
                <NavLink to={"/signup"}>Regístrate</NavLink>
              </li>
            </>
          )}
          { user.role === "ADMIN" ? <li>settings</li> :  null }

          <li onClick={logoutUserService}>
            <IoExitSharp />
          </li>
        </ul>
      </div>
    </nav>
  );
}
