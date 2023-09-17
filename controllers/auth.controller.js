const User = require("../schema/user.schema");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.loginUser = async function login(req, res) {
    try {
        let userData = await User.findOne({
            email: req.body.email,
            password: req.body.password,
        });
        if (!userData) {
            throw err;
        }
        const payload = {
            id: userData._id,
            name: userData.name,
            email: userData.email
        };
        jwt.sign(
            payload,
            process.env.JWT_SECRET_KEY,
            { expiresIn: 3600 * 24 },
            (err, token) => {
                if (err) {
                    throw err;
                }
                res.status(200).send({
                    message: "User logged in successfully",
                    token: token,
                });
            }
        );
    } catch (error) {
        res.status(400).send({
            message: "Please enter valid email or password",
            error: [error],
        });
    }
};