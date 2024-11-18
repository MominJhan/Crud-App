import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const UserDetail = () => {
  const { id } = useParams(); 
  const { users } = useSelector((state) => state.users);

  const [userDetail, setUserDetail] = useState(null);

  useEffect(() => {
    const user = users.find((user) => user.id === parseInt(id));
    setUserDetail(user);
  }, [id, users]);

  if (!userDetail) {
    return <p>User not found</p>;
  }

  return (
    <div>
      <h2>User Details</h2>
      <p>Name: {userDetail.name}</p>
      <p>ID: {userDetail.id}</p>
    </div>
  );
};

export default UserDetail;
