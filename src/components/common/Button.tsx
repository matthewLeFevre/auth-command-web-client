import React from "react";
import { ReactChildren } from "react";

export default function Button({ role = "default", children, ...rest }) {
  return (
    <button type='button' className={`btn ${role}`} {...rest}>
      {children}
    </button>
  );
}
