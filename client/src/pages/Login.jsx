import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const { data } = await axios.post("/loginUser", {
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vw-100">
      <div className="card border border-success text-center p-3">
        <form
          onSubmit={loginUser}
          className="d-flex flex-column justify-content-around p-2"
        >
          <h3 className="mb-4">Login</h3>
          <label htmlFor="">Email</label>
          <input
            type="email"
            placeholder="Enter your email..."
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            className="mb-4 border border-secondary text-center rounded bg-transparent text-dark"
          />
          <label htmlFor="">Password</label>
          <input
            type="password"
            placeholder="Enter your password..."
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            className="mb-4 border border-secondary text-center rounded bg-transparent text-dark"
          />
          <button className="btn btn-success">Login</button>
        </form>
      </div>
    </div>
  );
}
