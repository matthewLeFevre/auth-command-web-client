import React, { useState } from "react";
import { useAsync } from "react-use";
import { useAppsCTX, useUserCTX } from "../../../utilities/contexts";
import request from "../../../utilities/request";
import Button from "../../common/Button";
import Applications from "./Applications";

export default function Dashboard() {
  const { apps, setApps }: any = useAppsCTX();

  const getApps = async () => {
    const result = await request({
      method: "GET",
      path: `/applications/user`,
      auth: true,
    });
    setApps(result.data);
  };
  useAsync(async () => {
    if (apps.length < 1) {
      await getApps();
    }
  }, []);
  return (
    <div>
      <h1>Applications</h1>
      <Applications apps={apps} />
      <Button onClick={getApps}>Refresh</Button>
    </div>
  );
}
