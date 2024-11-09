import React from "react";
import Sidebar from "../components/Sidebar";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Contacts() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get("/contacts");
        setData(data);
      } catch (error) {
        console.log("Error fetching Data", error);
      }
    };
    fetchData();
  }, [data]);
  return (
    <div className="d-flex flex-row vw-100">
      <div className="align-self-start sticky-top">
        <Sidebar />
      </div>

      <div className="d-flex flex-column mt-5 align-items-center vw-100">
        <h1>Contacts</h1>

        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">FirstName</th>
              <th scope="col">LastName</th>
              <th scope="col">Number</th>
              <th scope="col">Address</th>
            </tr>
          </thead>
          <tbody>
            {data.data &&
              data.data.map((item) => {
                return (
                  <tr>
                    <th scope="row">{item.ID}</th>
                    <td>{item.FirstName}</td>
                    <td>{item.LastName}</td>
                    <td>{item.Number}</td>
                    <td>{item.Address}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
