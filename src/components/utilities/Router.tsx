import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useClientCTX } from "../../utilities/contexts";
import Dashboard from "../pages/dashboard/Dashboard";
import Details from "../pages/details/Details";
import Login from "../pages/login/Login";
import Settings from "../pages/settings/Settings";
import AuthWrapper from "./AuthWrapper";
import Page from "./Page";

export default function Router() {
  const { mode }: any = useClientCTX();
  return (
    <div className={mode}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route element={<Page />}>
            <Route
              path='/dashboard'
              element={
                <AuthWrapper>
                  <Dashboard />
                </AuthWrapper>
              }
            />
            <Route
              path='/settings'
              element={
                <AuthWrapper>
                  <Settings />
                </AuthWrapper>
              }
            />
            <Route
              path='/details/:appId'
              element={
                <AuthWrapper>
                  <Details />
                </AuthWrapper>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
