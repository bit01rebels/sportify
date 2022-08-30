import React from "react";
import img from "../../myImages/c6.jpg";
import styles from "./feed.module.css";
import facebook from "../../myImages/facebook.png";
import instagram from "../../myImages/instagram.png";
import linkedin from "../../myImages/linkedin.png";
import twitter from "../../myImages/twitter.png";
import {Link} from 'react-router-dom';

const mystyle = {
  height: "70vh",
  width: "100vw",
};

export default function brandManagement() {
  return (
    <>
      <img src={img} className={styles.image} alt="..." style={mystyle} />
      <h1 className="display-3 text-center fw-bold mt-3">Good Habits</h1>
      <hr className="bg-success border-2 border-top border-dark ms-5 me-5"></hr>
      <br />
      <div className="text-start ms-5 me-5 mb-5">
        <h5 className={styles.text}>
          Training, putting in the time and energy to be successful is the most
          obvious action. But how you do it counts. And it applies to all levels
          of athletes. Consistency is the key. There will be days with bad
          weather, or when you will want to go out with your friends and just
          have a fun time. There is nothing wrong in taking a day off once in a
          while. But you need to keep track and know there are days when you
          simply must decide to train, no matter what.
        </h5>
        <span>
                  <Link className="footlogo" to="/"><img src={facebook} alt="facebookIcon" width="50px" height="50px"/></Link>
                  <span> </span>
                  <Link className="footlogo" to="/"><img src={linkedin} alt="linkedenIcon" width="50px" height="50px"/></Link>
                  <span> </span>
                  <Link className="footlogo" to="/"><img src={twitter} alt="twitterIcon" width="50px" height="50px"/></Link>
                  <span> </span>
                  <Link className="footlogo" to="/"><img src={instagram} alt="instagramIcon" width="50px" height="50px"/></Link>
        </span>
      </div>
      <br />
    </>
  );
}
