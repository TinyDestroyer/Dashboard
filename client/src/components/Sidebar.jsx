import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { FaHome, FaUserAlt } from "react-icons/fa";
import { CgSandClock } from "react-icons/cg";
import {
  MdSpaceDashboard,
  MdGroups2,
  MdOutlineSupportAgent,
  MdContacts,
  MdCall,
  MdCallMissedOutgoing,
} from "react-icons/md";

export default function Sidebar() {
  return (
    <div className="d-flex flex-column bg-warning vh-100 side-bar">
      <Link to="/" className="mx-2 text-dark p-2 mt-5">
        <FaHome className="m-2" />
        Home
      </Link>
      <Link to="/dashboard" className="link mx-2 text-dark p-2">
        <MdSpaceDashboard className="m-2" />
        Dashboard
      </Link>
      <Link to="/user" className="mx-2 text-dark p-2">
        <FaUserAlt className="m-2" />
        User
      </Link>
      <Link to="/group" className="mx-2 text-dark p-2">
        <MdGroups2 className="m-2" />
        Group
      </Link>
      <Link to="/agents" className="mx-2 text-dark p-2">
        <MdOutlineSupportAgent className="m-2" />
        Agents
      </Link>
      <Link to="/dailer" className="mx-2 text-dark p-2">
        <MdCall className="m-2" />
        Dailer
      </Link>
      <Link to="/contacts" className="mx-2 text-dark p-2">
        <MdContacts className="m-2" />
        Contacts
      </Link>
      <Link to="/notanswer" className="mx-2 text-dark p-2">
        <MdCallMissedOutgoing className="m-2" />
        Not Answer
      </Link>
      <Link to="/remaining" className="mx-2 text-dark p-2">
        <CgSandClock className="m-2" />
        Remaining
      </Link>
    </div>
  );
}
