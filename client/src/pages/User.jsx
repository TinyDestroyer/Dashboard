import React from "react";
import Sidebar from "../components/Sidebar";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function User() {
  const [agent, setAgent] = useState(false);
  const [agents, setAgents] = useState([]);
  const [users, setUsers] = useState([]);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    type: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get("/agents");
        setAgents(data);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchUsers = async () => {
      try {
        const users = await axios.get("/users");
        setUsers(users);
      } catch (error) {
        console.log(error);
      }
    };
    console.log("Hitted");
    fetchData();
    fetchUsers();
  }, [agents, users]);

  const registerUser = async (e) => {
    e.preventDefault();
    const { name, email, password, type } = data;
    try {
      const { data } = await axios.post("/register", {
        name,
        email,
        password,
        type,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({
          name: "",
          email: "",
          password: "",
          type: "",
        });
        toast.success("Login successful, welcome");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange1 = (e) => {
    if (e.target.value == "agent") {
      setAgent(true);
      setData({ ...data, type: "agent" });
    } else {
      setAgent(false);
      setData({ ...data, type: "admin" });
    }
  };
  return (
    <div className="d-flex flex-row vw-100">
      <div className="align-self-start sticky-top">
        <Sidebar />
      </div>

      <div className="d-flex flex-column mt-5 align-items-center vw-100">
        <button
          type="button"
          class="btn btn-primary align-self-start mx-2"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Add Users
        </button>

        <h1>Users</h1>

        <table class="table table-striped table-hover text-center">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Type</th>
            </tr>
          </thead>
          <tbody>
            {users.data &&
              users.data.map((item, index) => {
                console.log(item);
                return (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>{item.type}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>

        {/* <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Launch demo modal
        </button> */}

        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Add User
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <form action="" className="d-flex flex-column text-center">
                  <label htmlFor="">Type</label>
                  <select
                    className="form-select mb-2"
                    aria-label="Default select example"
                    onChange={handleChange1}
                    value={data.type}
                  >
                    <option value="" selected>
                      Select
                    </option>
                    <option value="admin">Admin</option>
                    <option value="agent">Agent</option>
                  </select>
                  {!!agent && (
                    <select
                      className="form-select mb-2"
                      aria-label="Default select example"
                    >
                      <option selected>Select</option>
                      {!!agents.data &&
                        agents.data.map((item) => {
                          return (
                            <option value={item.ID}>
                              {item.FirstName} {item.LastName} ({item.Number})
                            </option>
                          );
                        })}
                    </select>
                  )}
                  <label>Username</label>
                  <input
                    type="text"
                    placeholder="Enter username"
                    className="bg-light border rounded text-center mb-2 text-dark"
                    value={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                  />
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="Enter Email"
                    className="bg-light border rounded text-center mb-2 text-dark"
                    value={data.email}
                    onChange={(e) =>
                      setData({ ...data, email: e.target.value })
                    }
                  />
                  <label>Password</label>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    className="bg-light border rounded text-center mb-2 text-dark"
                    value={data.password}
                    onChange={(e) =>
                      setData({ ...data, password: e.target.value })
                    }
                  />
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  className="btn btn-success mb-2"
                  onClick={registerUser}
                  // data-bs-dismiss="modal"
                >
                  Add User
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
