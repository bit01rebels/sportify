const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_TOKEN } = require("../keys");
const Token = require("../models/token");
const crypto = require("crypto");
const sendEmail = require("../utils/sendEmail");
const Joi = require('@hapi/joi');

router.get("/home", (req, res) => {
  res.send("hello from auth");
});

const validate = (data) => {
	const schema = Joi.object({
		name: Joi.string().required(),
		email: Joi.string().email().required().email(),
    username: Joi.string().required(),
		password: Joi.string().required(),
	});
	return schema.validate(data);
};

router.post("/signup",async (req, res) => {
  console.log(req.body);
  console.log("Here0");
  // const { name, username, email, password } = req.body;
  // if (!email || !name || !password || !username)
  //   return res.status(422).json({ error: "Please add all the fields" });
  // User.findOne({ email: email })
  //   .then((savedUser) => {
  //     if (savedUser)
  //       return res.status(422).json({ error: "Email already exist" });

  //     let user = await User.findOne({ email: req.body.email });
  //     if (user)
	// 		return res
	// 			.status(409)
	// 			.send({ message: "User with given email already Exist!" });

  //     User.findOne({ username: username })
  //       .then((savedName) => {
  //         if (savedName)
  //           return res.status(422).json({ error: "Username already exist" });
  //         bcrypt.hash(password, 12).then((hashedPassword) => {
  //           const user = new User({
  //             name,
  //             username,
  //             email,
  //             password: hashedPassword,
  //           });

  //           user
  //             .save()
  //             .then((user) => {
  //               res.json({ message: "Saved User" });
  //             })
  //             .catch((err) => {
  //               console.log(err);
  //             });
  //         });
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
	try {
		const { error } = validate(req.body);
    console.log(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

    console.log("here0");  
		let user = await User.findOne({ email: req.body.email });
		if (user)
			return res
				.status(409)
				.send({ message: "User with given email already Exist!" });

        console.log("here1");
		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		user = await new User({ ...req.body, password: hashPassword }).save();

    console.log("here2");
		const token = await new Token({
			userId: user._id,
			token: crypto.randomBytes(32).toString("hex"),
		}).save();
		//const url = `${process.env.BASE_URL}users/${user.id}/verify/${token.token}`;
    const url = `${process.env.BASE_URL}signin`;

		await sendEmail(user.email, "Verify Email", url);

    console.log("here3");

		res
			.status(201)
			.send({ message: "An Email sent to your account please verify" });
	} catch (error) {
		console.log(error);
		res.status(500).send({ message: "Internal Server Error" });
	}
});

router.get("/:id/verify/:token/", async (req, res) => {
	try {
        console.log("Reaching backend");
		const user = await User.findOne({ _id: req.params.id });
		if (!user) return res.status(400).send({ message: "Invalid link" });

		const token = await Token.findOne({
			userId: user._id,
			token: req.params.token,
		});
		if (!token) return res.status(400).send({ message: "Invalid link" });

		await User.updateOne({ _id: user._id, verified: true });
		await token.remove();

		res.status(200).send({ message: "Email verified successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}

});

router.post("/signin", (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(422).json({ error: "please add email or password" });
  User.findOne({ email: email }).then((savedUser) => {
    if (!savedUser)
      return res.status(422).json({ error: "Invalid Email or password" });
    bcrypt
      .compare(password, savedUser.password)
      .then((doMatch) => {
        if (doMatch) {
          const token = jwt.sign({ _id: savedUser._id }, JWT_TOKEN);
          res.json({ token });
        } else
          return res.status(422).json({ error: "Invalid Email or password" });
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/home");
});

// router.get("/:id/verify/:token/", async (req, res) => {
// 	try {
//     console.log(req);
// 		const user = await User.findOne({ _id: req.params.id });
// 		if (!user) return res.status(400).send({ message: "Invalid link" });

// 		const token = await Token.findOne({
// 			userId: user._id,
// 			token: req.params.token,
// 		});
// 		if (!token) return res.status(400).send({ message: "Invalid link" });

// 		await User.updateOne({ _id: user._id, verified: true });
// 		await token.remove();
//     console.log(res.status());
// 		res.status(200).send({ message: "Email verified successfully" });
// 	} catch (error) {
// 		res.status(500).send({ message: "Internal Server Error" });
// 	}
// });

module.exports = router;
