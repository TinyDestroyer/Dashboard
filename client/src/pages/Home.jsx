import React from "react";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="d-flex flex-row vw-100">
      <div className="align-self-start">
        <Sidebar />
      </div>

      <div className="d-flex flex-column justify-content-center align-items-center vw-100">
        <h1>Home</h1>
      </div>
    </div>
  );
}
