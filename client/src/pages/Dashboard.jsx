import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  const { user } = useContext(UserContext);
  return (
    <div className="d-flex flex-row vw-100">
      <div className="align-self-start">
        <Sidebar />
      </div>

      <div className="d-flex flex-column justify-content-center align-items-center vw-100">
        <h1>Dashboard</h1>
        {!!user && <h2>hi! {user.name}</h2>}
      </div>
    </div>
  );
}
