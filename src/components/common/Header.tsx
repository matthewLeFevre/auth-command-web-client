import React from "react";
import { Link } from "react-router-dom";
import { useClientCTX } from "../../utilities/contexts";
import Button from "./Button";
import DashboardIcon from "../../assets/dashboard-white.svg";
import SettingsIcon from "../../assets/settings-white.svg";
import AstroIcon from "../../assets/astro-white.svg";

export default function Header() {
  return (
    <div className='header'>
      <div className='header__icon'>
        <img src={AstroIcon} /> Auth Command
      </div>

      <Link to='/dashboard' className='header__link'>
        <img src={DashboardIcon} />
        <span>Dashboard</span>
      </Link>
      <Link to='/settings' className='header__link'>
        <img src={SettingsIcon} />
        <span>Settings</span>
      </Link>
    </div>
  );
}
