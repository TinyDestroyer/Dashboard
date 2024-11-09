import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { FaUser, FaUserAlt } from "react-icons/fa";

export default function Navbar() {
  const { user } = useContext(UserContext);

  const Logout = async () => {
    await axios.get("/logout");
  };

  return (
    <nav className="nav nav-fill fixed-top d-flex flex-row-reverse justify-content-between mb-4 p-2 vw-100">
      {/* {!user && (
        <div className="align-items-end">
          <Link to="login" className="mx-2 text-dark">
            Login
          </Link>
          <Link to="register" className="mx-2 text-dark">
            Register
          </Link>
        </div>
      )} */}
      {/* {user && (
        <button className=" btn mx-2 text-dark align-self-end" onClick={Logout}>
          Logout
        </button>
      )} */}
      <div className="align-items-end">
        {!user && (
          <div>
            <Link to="login" className="mx-2 text-dark">
              Login
            </Link>
            <Link to="register" className="mx-2 text-dark">
              Register
            </Link>
          </div>
        )}
        {user && (
          <div className="btn btn-light">
            <FaUser /> {user.name}
          </div>
        )}
      </div>
    </nav>
  );
}
