import React, { useState, useEffect } from "react";
import "./App.css";

const UserManagementPage = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    country: "",
    phone_number: "",
  });
  const [editingUser, setEditingUser] = useState(null);

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

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
  };

  // Add or update user
  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = editingUser
      ? `http://localhost:5003/api/users/${editingUser.id}`
      : "http://localhost:5003/api/users";
    const method = editingUser ? "PUT" : "POST";

    try {
      const response = await fetch(endpoint, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });

      if (response.ok) {
        alert(editingUser ? "User updated successfully!" : "User added successfully!");
        setNewUser({ name: "", email: "", country: "", phone_number: "" });
        setEditingUser(null);
        fetchUsers();
      } else {
        const errorData = await response.json();
        alert("Error: " + errorData.message);
      }
    } catch (error) {
      console.error("Error saving user:", error);
    }
  };

  // Edit user
  const editUser = (user) => {
    setEditingUser(user);
    setNewUser(user);
  };

  // Delete user
  const deleteUser = async (userId) => {
    try {
      const response = await fetch(`http://localhost:5003/api/users/${userId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("User deleted successfully!");
        fetchUsers();
      } else {
        const errorData = await response.json();
        alert("Error: " + errorData.message);
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container">
      <h1>Users Of the Week</h1>
      <img
        src="data:image/png;base64,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"
        alt="User Image"
        style={{ width: '100px', height: '100px', display: 'block', margin: '0 auto' }}
      />
      <form onSubmit={handleSubmit}>
        <h2>{editingUser ? "Edit User" : "Add New User"}</h2>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={newUser.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={newUser.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Country:
          <input
            type="text"
            name="country"
            value={newUser.country}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Phone Number:
          <input
            type="text"
            name="phone_number"
            value={newUser.phone_number}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">{editingUser ? "Update User" : "Add User"}</button>
      </form>
  
      <h2>All Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Country: {user.country}</p>
            <p>Phone: {user.phone_number}</p>
            <button onClick={() => editUser(user)}>Edit</button>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
  
};

export default UserManagementPage ;
