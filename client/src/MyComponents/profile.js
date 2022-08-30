import React, { useState , useEffect} from "react";
import "./profile.css";
import axios from 'axios'
import virat_kohli from "../myImages/virat kohli.jpg";
const Profile = () => {

  // const [name, setName] = useState();

  // useEffect(() => {
  //   axios.get("http//localhost:7000/")
  
  //   return () => {
  //     second
  //   }
  // }, [third])
  

  return (
    <>
      <div className="marginCorrection">
      <div className="container mt-6 d-flex justify-content-center">
        <div className="w-50 card p-4">
          <div className="image d-flex flex-column justify-content-center align-items-center">
            <button className="btn btn-secondary">
              <img src={virat_kohli} height="120" width="120" alt="userImage" />
            </button>
            <span className="name mt-3">Virat Kohli</span>
            <span className="emailId">kohlivirat@gmail.com</span>
            <div className="d-flex flex-row justify-content-center align-items-center gap-2">
              <span className="user">@Virat129</span>
            </div>
            <div className="d-flex flex-row justify-content-center align-items-center mt-3">
              <span className="number">
                240 Million <span className="follow">Followers</span>
              </span>
            </div>
            <div className="text mt-3">
              <span>
                Crickter.
                <br />
                Best player of the year.
              </span>
            </div>
            <div className=" px-2 rounded mt-4 date ">
              <span className="join">Joined May,2022</span>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Profile;
