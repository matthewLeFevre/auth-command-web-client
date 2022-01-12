import React from "react";
import useSignout from "../../../hooks/useSignout";
import { useClientCTX } from "../../../utilities/contexts";
import Button from "../../common/Button";

export default function Settings() {
  const { mode, setMode }: any = useClientCTX();
  const signout = useSignout();
  return (
    <div>
      <h1>Settings</h1>
      <Button
        role='confirm-2--inline'
        onClick={() => setMode(mode === "light" ? "dark" : "light")}
      >
        Toggle {mode === "light" ? "Dark" : "Light"}
      </Button>
      <Button role='warning-1' onClick={signout}>
        Sign out
      </Button>
    </div>
  );
}
