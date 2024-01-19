import { Router } from "express";
import { User } from "../db/users.js";
import jwt from "jsonwebtoken";
import { jwtSecret } from "../config.js";
const route = Router();

route.post("/signin", async (req, res) => {
    const { email, password } = req.body;
    const isValid = await User.findOneAndUpdate(
        { email, password },
        { $set: { updated: new Date() } },
        { new: true }
    );
    if (!isValid) {
        res.status(400).send({
            msg: "Invalid username/password",
        });
    }
    let token = jwt.sign({ email }, jwtSecret);
    token = "Bearer " + token;
    res.send({
        msg: "On sign in",
        token,
    });
});

route.get("/signout", (req, res) => {
    res.send({
        msg: "On sign out",
    });
});

export const authRoute = route;
