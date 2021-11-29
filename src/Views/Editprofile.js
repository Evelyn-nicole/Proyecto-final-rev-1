import React from "react";
import EditFormUser from "../Components/Editformuser.js";

export const EditProfile = () => {
  return (
    <div className="container">
      <div className="m-5">
        <h1 className="card-title text-center mt-4">Modificar Usuario</h1>
        <h2 className="card-subtitle text-center mt-2">
          Ingresa los datos que quieras modificar
        </h2>
        <div className="">
          <div className="">
            <EditFormUser />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
