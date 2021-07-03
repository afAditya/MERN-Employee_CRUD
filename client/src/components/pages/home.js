import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [employees, setEmployee] = useState([]);

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    const result = await axios.get("http://localhost:3001/employee");
    setEmployee(result.data);
  };

  const deleteEmployee = async (id) => {
    await axios.delete(`http://localhost:3001/employee/${id}`);
    loadEmployees();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <table class="table border shadow">
          <thead class="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">gender</th>
              <th scope="col">salary</th>
              <th scope="col">team</th>
              <th scope="col">Address</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{employee.name}</td>
                <td>{employee.gender}</td>
                <td>{employee.salary}</td>
                <td>{employee.team}</td>
                <td>{employee.address}</td>
                <td>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/employees/edit/${employee._id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-danger mr-2"
                    onClick={() => deleteEmployee(employee._id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
