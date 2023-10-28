import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../usersSlice";

const UseList = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  console.log(data, "data");
  return (
    <div>
      <h1> list of user - </h1>
      {data.loading && <div> ... loading </div>}
      {!data.loading && data.error ? <div> Error : {data.error} </div> : null}
      {!data.loading && data.data.length ? (
        <ul>
          {data.data.map((user) => (
            <li key={user.id}> {user.name} </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default UseList;
