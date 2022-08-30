import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import img from "../myImages/logo.png";
import "./signin.css";
import axios from "axios";
import styles from "./signup.module.css";

export default function Signup() {

  const [data, setData] = useState({
		doctorName: "",
		registrationNumber: "",
		yearOfRegistration: "",
        stateMedicalCouncil: "",
	});
	const [error, setError] = useState("");
	const [msg, setMsg] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.doctorName]: input.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		try {
            console.log("Bug is here");
			// const url = "http://localhost:7000/signup/";
			// const { data: res } = await axios.post(url, data);
			setMsg("Registration is successful");
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

  return (
    <div className="app">
      <div>
    <div className="container ms-auto me-auto mt-1 mb-1" >
      <section className="mb-4">
        <div className="row">
          <div className="col-lg-9 mb-1 mt-1">
            <img src={img} className="img1 img-responsive mt-5" alt="..." />
          </div>

          <div className="col-lg-3">
            <h1 className="h1-responsive fs-1 fw-bold text-center mb-5 mt-5">Sign Up</h1>
            <form action="" onSubmit={handleSubmit}>
              <div className="row mt-5 mb-5">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      name="doctorName"
                      placeholder="Name"
                      autoComplete="off"
                      // value={name}
                      // onChange={(e) => setName(e.target.value)}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row mt-5 mb-5">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      name="registrationNumber"
                      placeholder="Registration Number"
                      autoComplete="off"
                      // value={email}
                      // onChange={(e) => setEmail(e.target.value)}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row mt-5 mb-5">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      name="yearOfRegistration"
                      placeholder="Year of Registration"
                      autoComplete="off"
                      // value={username}
                      // onChange={(e) => setUsername(e.target.value)}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row mt-5 mb-5">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      name="stateMedicalCouncil"
                      placeholder="State Medical Council"
                      autoComplete="off"
                      // value={password}
                      // onChange={(e) => setPasword(e.target.value)}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row mt-5 mb-5">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <a href="https://www.nadaindia.org/#:~:text=Register%20For-,NewsLetter,-Subscribe%20to%20our" target="_blank" onClick="window.scroll(0,1);" >
                    <input
                      type="checkbox"
                      name="newsletter"
                      href="https://www.nadaindia.org/#:~:text=Register%20For-,NewsLetter,-Subscribe%20to%20our"
                      //placeholder="Password"
                      target="_blank"
                      autoComplete="off"
                      //value={password}
                      //onChange={(e) => setPasword(e.target.value)}      
                      onChange={handleChange}
                    />
                    <label target="_blank">Do you wish to subscribe for newsletter?</label>
                    </a>
                    
                  </div>
                </div>
              </div>
             {error && <div className={styles.error_msg}>{error}</div>}
	 					{msg && <div className={styles.success_msg}>{msg}</div>}
              <div className="d-grid gap-2 mb-5">
              <button
                className="btn btn-primary"
                type="submit"
              >
                Sign Up
              </button>
            </div>                 
           
            </form>

            <div className="status"></div>
          </div>
        </div>
      </section>
    </div>
    </div>
    </div>
  );
}
