import React, { useState, useEffect } from "react";

const FeaturedUsersPage = () => {
  const [users, setUsers] = useState([]);

  // Fetch all users
  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:5003/api/users");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div
      className="container"
      style={{
        backgroundColor: "white",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        color: "black",
      }}
    >
      <img
        src="data:image/png;base64,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"
        alt="Banner"
        style={{ width: "20%", height: "auto", marginBottom: "20px" }}
      />
      <h1
        style={{
            fontSize: "1.5rem", // Smaller title size
            color: "#FF6F61", // Deep peach color
          }}
          
      >
        Users Of the Week
      </h1>

      <h2
        style={{
          color: "#000", // Black
        }}
      >
       THE TASTEMADE GANG!
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {users.map((user) => (
          <div
            key={user.id}
            style={{
              backgroundColor: "#FF6F61", // Light gray
              borderRadius: "10px",
              margin: "10px",
              padding: "20px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              width: "300px",
              textAlign: "left",
            }}
          >
           <h3 style={{ color: "#800080" }}>{user.name}</h3>

            <p>{`Email: ${user.email}`}</p>
            <p>{`Country: ${user.country}`}</p>
            <p>{`Phone: ${user.phone_number}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedUsersPage;
