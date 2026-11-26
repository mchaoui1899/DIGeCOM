import React, { useEffect, useState } from "react";
import "../../../styles/UtilisateurAd.css";

export default function UtilisateursAd() {

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  // FETCH USERS
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/admin/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

  // FILTER
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  );

  // DELETE
  const deleteUser = (id) => {
    const confirmDelete = window.confirm(
      "Delete this user ?"
    );

    if (confirmDelete) {
      setUsers(users.filter((u) => u.id !== id));
    }
  };

  return (
    <div className="users-page">

      {/* HEADER */}
      <div className="top-header">

        <div>
          <h1>Users Management</h1>
          <p>Modern admin dashboard experience</p>
        </div>

        <button className="add-btn">
          + Add User
        </button>

      </div>

      {/* STATS */}
      <div className="stats-grid">

        <div className="stat-card">
          <span>Total Users</span>
          <h2>{users.length}</h2>
        </div>

        <div className="stat-card">
          <span>Admins</span>
          <h2>
            {
              users.filter(
                (u) => u.role === "admin"
              ).length
            }
          </h2>
        </div>

        <div className="stat-card">
          <span>Active Today</span>
          <h2>
            {users.length}
          </h2>
        </div>

      </div>

      {/* SEARCH */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />
      </div>

      {/* TABLE */}
      <div className="table-container">

        <table>

          <thead>
            <tr>
              <th>ID</th>
              <th>User</th>
              <th>Role</th>
              <th>Created</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>

            {filteredUsers.map((user) => (

              <tr key={user.id}>

                <td>#{user.id}</td>

                <td>

                  <div className="user-info">

                    <div className="avatar">
                      {user.name.charAt(0)}
                    </div>

                    <div>
                      <h4>{user.name}</h4>
                      <p>{user.email}</p>
                    </div>

                  </div>

                </td>

                <td>

                  <span
                    className={
                      user.role === "admin"
                        ? "role admin"
                        : "role user"
                    }
                  >
                    {user.role}
                  </span>

                </td>

                <td>
                  {
                    new Date(
                      user.created_at
                    ).toLocaleDateString()
                  }
                </td>

                <td>

                  <div className="actions">

                    <button className="view">
                      View
                    </button>

                    <button className="edit">
                      Edit
                    </button>

                    <button
                      className="delete"
                      onClick={() =>
                        deleteUser(user.id)
                      }
                    >
                      Delete
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}