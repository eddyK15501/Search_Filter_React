import React, { useState, useEffect } from "react";
import "./styles.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://dummyjson.com/users");

      const data = await response.json();

      console.log(data.users);
      setUsers(data.users);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {users
        .filter((data) => {
          if (searchTerm === "") {
            return data;
          } else if (
            data.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            data.lastName.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return data;
          }
        })
        .map((data, index) => {
          return (
            <div className="user" key={index}>
              <p>
                {data.firstName} {data.lastName}
              </p>
            </div>
          );
        })}
    </div>
  );
};

export default App;
