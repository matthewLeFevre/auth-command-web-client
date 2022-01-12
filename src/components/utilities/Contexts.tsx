import { useState } from "react";
import {
  AppsContext,
  ClientContext,
  UserContext,
} from "../../utilities/contexts";

export default function Contexts({ children }) {
  const [user, setUser] = useState({});
  const [apps, setApps] = useState([]);
  const [mode, setMode] = useState(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  );
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <AppsContext.Provider value={{ apps, setApps }}>
        <ClientContext.Provider value={{ mode, setMode }}>
          {children}
        </ClientContext.Provider>
      </AppsContext.Provider>
    </UserContext.Provider>
  );
}
