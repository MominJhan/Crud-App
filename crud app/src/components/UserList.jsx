import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, deleteUser, updateUser } from "../api/apiSlice";
import { Link } from "react-router-dom";
import AddUser from "./AddUser";

const UserList = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);

  const [editingId, setEditingId] = useState(null);
  const [editedName, setEditedName] = useState("");

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  const handleEdit = (id, name) => {
    setEditingId(id);
    setEditedName(name);
  };

  const handleSaveEdit = () => {
    if (editingId && editedName) {
      dispatch(updateUser({ id: editingId, name: editedName }));
      setEditingId(null);
      setEditedName("");
    }
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <AddUser />
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {editingId === user.id ? (
              <div className="edit">
                <input
                  type="text"
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)}
                />
                <button onClick={handleSaveEdit}>Save</button>
                <button onClick={() => setEditingId(null)}>Cancel</button>
              </div>
            ) : (
              <>
                <span>{user.name}</span>
                <div className="actions">
                  <button
                    className="edit"
                    onClick={() => handleEdit(user.id, user.name)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                  <Link to={`/user/${user.id}`}>
                    <button className="read">Read</button>
                  </Link>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
