import { ENVIORNMENT } from "./config";

export default async function request({
  method = "GET",
  path,
  auth = false,
  data = {},
}) {
  const headers = {
    Accept: "application/json",
    "Content-type": "application/json",
  };

  let config: any = {
    method,
    headers,
  };

  if (method.toLowerCase() !== "get" && method.toLowerCase() !== "delete") {
    config.body = JSON.stringify(data);
  }

  if (auth) {
    const AT = localStorage.getItem("AT");
    if (!AT) return;
    config.headers["Authorization"] = `Bearer ${AT}`;
  }

  const response = await fetch(ENVIORNMENT + path, config);
  const processedResponse = await response.json();
  processedResponse.status = response.status;
  return processedResponse;
}
