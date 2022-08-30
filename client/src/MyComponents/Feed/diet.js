import React from "react";
import img from "../../myImages/c1.jpg";
import facebook from "../../myImages/facebook.png";
import instagram from "../../myImages/instagram.png";
import linkedin from "../../myImages/linkedin.png";
import twitter from "../../myImages/twitter.png";
import {Link} from 'react-router-dom';
import styles from './feed.module.css';

import { FacebookButton, FacebookCount } from "react-social";

const mystyle = {
  height: "70vh",
  width: "100vw",
};

export default function brandManagement() {
  // let url = "http://localhost:3000/diet";
  return (
    <>
      <img src={img} className={styles.image} alt="..." style={mystyle} />
      <h1 className="display-3 text-center fw-bold mt-3">DIET</h1>
      <hr className="bg-success border-2 border-top border-dark ms-5 me-5"></hr>
      <br />
      <div className="text-start ms-5 me-5 mb-5">
        <h5 className={styles.text}>
          Food Items You Can Easily Consumed By Sports Person 1.Cereals: Brown
          rice, Oat meal, Brocken wheat, Ragi, Quinoa, Maiz grit, Sweet corn.
          2.Pulses: Chickpeas, Kidney beans, moong dal, masoor dal, soybeans.
          3.Vegetables: Broccoli, Kale, Spinach, Lettuce, Beet, Potatoes,
          Carrots, Sweet potatoes, Beans and all other vegetables especially
          the green ones such as spinach, lettuce, leeks, broccoli, asparagus,
          peas, cabbage and beans, are high in minerals, calcium, iron and other
          vitamins 4.Fruits: Avacado, Banana, Custard Apple, Pears, Grape and
          Watermelon, Orenges and Apple sweet corn, bananas are good for
          carbohydrate loading before even 5.Milk and Milk products: Skim milk,
          Paneer, Cotage Cheese, Yoghurt. 6.Meat, Fish and Egg: Lean Meat,
          Chicken Brest, Tuna, Salmon, Tilapia, Sword fish , Cod. 7.Oil: 1.5
          Tbsp/ day Olive oil, Mustard Oil, Rice bran Oil, Canola oil 8.Sugar: 2
          Tsp/ day.
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