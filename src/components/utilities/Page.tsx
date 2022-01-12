import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../common/Header";

export default function Page() {
  return (
    <div className='page'>
      <Header />
      <div className='page__content'>
        <Outlet />
      </div>
    </div>
  );
}
