import React from "react";
import { ClipLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="loader-container">
      <ClipLoader color={"#fff"} size={90} />
    </div>
  );
}
