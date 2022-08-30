import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import img from "../myImages/logo.png";
import "./signin.css";
import axios from "axios";
import styles from "./signup.module.css";

export default function Signup() {
  // const history = useHistory();
  // const [name, setName] = useState("");
  // const [password, setPasword] = useState("");
  // const [email, setEmail] = useState("");
  // const [username, setUsername] = useState("");

  // const PostData = () => {
  //   var data = JSON.stringify({
  //     name,
  //     username,
  //     password,
  //     email,
  //   });
  //   console.log(data);
  //   fetch("/signup", {
  //     method: "post",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },

  //     body: data,
  //   })
  //     .then((data) => {
  //       if (data.status === 422) {
  //         window.alert("Please enter all detalis correctly");
  //       } else {
  //         history.push("/signin");
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const [data, setData] = useState({
		name: "",
		email: "",
		password: "",
    username: "",
	});
	const [error, setError] = useState("");
	const [msg, setMsg] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
      console.log("Bug is here");
			const url = "http://localhost:7000/signup";
			const { data: res } = await axios.post(url, data);
			setMsg(res.message);
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

  // return (
  //   <div className="container ms-auto me-auto mt-5 mb-5">
  //     <section className="mb-4">
  //       <div className="row">
  //         <div className="col-lg-9 mb5 mt-5">
  //           <img src={img} className="img-responsive mt-5" alt="..." />
  //         </div>

  //         <div className="col-lg-3 mb-5">
  //           <h1 className="h1-responsive fs-1 fw-bold text-center">Sign Up</h1>
  //           <form action="" onSubmit={handleSubmit}>
  //             <div className="row mt-5 mb-5">
  //               <div className="col-md-12">
  //                 <div className="md-form mb-0">
  //                   <input
  //                     type="text"
  //                     name="name"
  //                     placeholder="Name"
  //                     autoComplete="off"
  //                     //value={name}
  //                     // onChange={(e) => setName(e.target.value)}
  //                     onChange={handleChange}
  //                   />
  //                 </div>
  //               </div>
  //             </div>
  //             <div className="row mt-5 mb-5">
  //               <div className="col-md-12">
  //                 <div className="md-form mb-0">
  //                   <input
  //                     type="text"
  //                     name="email"
  //                     placeholder="Email"
  //                     autoComplete="off"
  //                     //value={email}
  //                   //  onChange={(e) => setEmail(e.target.value)}
  //                   onChange={handleChange}
  //                   />
  //                 </div>
  //               </div>
  //             </div>
  //             <div className="row mt-5 mb-5">
  //               <div className="col-md-12">
  //                 <div className="md-form mb-0">
  //                   <input
  //                     type="text"
  //                     name="username"
  //                     placeholder="username"
  //                     autoComplete="off"
  //                  //   value={username}
  //                    // onChange={(e) => setUsername(e.target.value)}
  //                    onChange={handleChange}
  //                   />
  //                 </div>
  //               </div>
  //             </div>
  //             <div className="row mt-5 mb-5">
  //               <div className="col-md-12">
  //                 <div className="md-form mb-0">
  //                   <input
  //                     type="password"
  //                     name="password"
  //                     placeholder="Password"
  //                     autoComplete="off"
  //                    // value={password}
  //                   //  onChange={(e) => setPasword(e.target.value)}
  //                   onChange={handleChange}
  //                   />
  //                 </div>
  //               </div>
  //             </div>

  //             {error && <div className={styles.error_msg}>{error}</div>}
	// 					{msg && <div className={styles.success_msg}>{msg}</div>}

  //           <div className="row mt-5 mb-5">
  //               <div className="col-md-12">
  //                 <div className="md-form mb-0 ms-4">
  //                 <button type="submit" className="btn btn-lg btn-success">
	// 						      Sign Up
	// 					      </button>
  //                 </div>
  //               </div>
  //             </div>

  //           </form>

  //           {/* <div className="d-grid gap-2 mb-5">
  //             <button
  //               className="btn btn-primary"
  //               type="submit"
  //               onClick={() => PostData()}
  //             >
  //               Submit
  //             </button>
  //           </div> */}
  //           <div className="status"></div>
  //         </div>
  //       </div>
  //     </section>
  //   </div>
  // );


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
                      name="name"
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
                      name="email"
                      placeholder="Email"
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
                      name="username"
                      placeholder="Username"
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
                      type="password"
                      name="password"
                      placeholder="Password"
                      autoComplete="off"
                      // value={password}
                      // onChange={(e) => setPasword(e.target.value)}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              {/* <div className="row mt-5 mb-5">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <input
                      type="checkbox"
                      name="username"
                      placeholder="Username"
                      autoComplete="off"
                      // value={username}
                      // onChange={(e) => setUsername(e.target.value)}
                      onChange={handleChange}
                    /><label>Doctor?</label>
                  </div>
                </div>
              </div> */}
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
