import React from "react";
import Sidebar from "../components/Sidebar";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Agents() {
  const [agents, setAgents] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const agents = await axios.get("/agents");
        setAgents(agents);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [agents]);
  return (
    <div className="d-flex flex-row vw-100">
      <div className="align-self-start sticky-top">
        <Sidebar />
      </div>

      <div className="d-flex flex-column mt-5 align-items-center vw-100">
        <h1 className="m-2">Agents</h1>
        <table class="table table-striped table-hover text-center">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">FirstName</th>
              <th scope="col">LastName</th>
              <th scope="col"> Number</th>
            </tr>
          </thead>
          <tbody>
            {agents.data &&
              agents.data.map((item, index) => {
                return (
                  <tr>
                    <th>{index + 1}</th>
                    <td>{item.FirstName}</td>
                    <td>{item.LastName}</td>
                    <td>{item.Number}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
