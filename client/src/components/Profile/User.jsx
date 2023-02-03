import React from "react";

function User({ user }) {
  return (
    <div>
      <div className="dashboardCon">
        <div className="dashSub">
          <div>
            <h3>Name</h3>
            <p>{user.userName}</p>
          </div>
          <div>
            <h3>Email</h3>
            <p>{user.email}</p>
          </div>
          <div>
            <h3>Phone Number</h3>
            <p>{user.phoneNumber}</p>
          </div>
          <div>
            <h3>Age</h3>
            <p>{user.personalInfo.age}</p>
          </div>
          <div>
            <h3>Location</h3>
            <p>{user.personalInfo.location}</p>
          </div>
          <div>
            <h3>Father's Name</h3>
            <p>{user.parentsInfo.fatherName}</p>
          </div>
          <div>
            <h3>Father's Phone Number</h3>
            <p>{user.parentsInfo.fatherPhoneNum}</p>
          </div>
          <div>
            <h3>Mother's Name</h3>
            <p>{user.parentsInfo.motherName}</p>
          </div>
          <div>
            <h3>Mother's Phone Number</h3>
            <p>{user.parentsInfo.motherPhoneNum}</p>
          </div>
        </div>
        <div>
          <div>
            <h3>Medical History</h3>
            <p>{user.medicalHistory}</p>
          </div>
          <div>
            <h3>Allergies</h3>
            <p>{user.allergies}</p>
          </div>
          <div>
            <h3>Appointment</h3>
            <p>{user.appointment?.split("G")[0]}</p>
            <p>{user.department}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
