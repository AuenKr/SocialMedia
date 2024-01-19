import jwt from "jsonwebtoken";
import { jwtSecret } from "../config.js";

function authorizeUser(req, res, next) {
    const { authorization } = req.headers;
    let token = authorization.split(" ")[1];
    try {
        jwt.verify(token, jwtSecret);
        next();
    } catch (err) {
        res.status(400).send({
            msg: "Invalid Token",
            err,
        });
    }
}

export default authorizeUser;
