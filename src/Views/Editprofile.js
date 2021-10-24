import React from "react";
import EditUser from "../Components/Edituser.js";
import EditFormUser from "../Components/Editformuser.js";


export const EditProfile = () => {
    return (
        <div className="container">
            <div className="m-5 text-center">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <EditUser />
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <EditFormUser />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;