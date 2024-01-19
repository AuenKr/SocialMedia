import { Router } from "express";
import { User } from "../db/users.js";
import createUserMiddleware from "../middlewares/createUserMiddleware.js";
import authorizeUser from "../middlewares/authorizeUser.js";

const route = Router();

route.get("/users", async (req, res) => {
    const data = await User.find({});
    res.send({
        msg: "on api/users get route",
        data,
    });
});

route.post("/users", createUserMiddleware, async (req, res) => {
    let { email } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist) {
        res.status(400).send({
            msg: "email already registered",
        });
        return;
    }
    const data = { ...req.body, created: new Date(), updated: new Date() };
    const response = await User.create(data);
    res.send({
        msg: "on api/users",
        response,
    });
});

route.get("/users/:userId", authorizeUser, async (req, res) => {
    const id = req.params.userId;
    console.log(id);
    const data = await User.findById(id);
    res.send({
        user: data,
    });
});

route.put("/users/:userId", authorizeUser, async (req, res) => {
    const id = req.params.userId;
    const data = req.body;
    const isUpdated = await User.findOneAndUpdate(
        { _id: id },
        { $set: data },
        { new: true, runValidators: true }
    );
    res.send({
        msg: "user data updated",
        data: isUpdated,
    });
});

route.delete("/users/:userId", authorizeUser, async (req, res) => {
    const id = req.params.userId;
    console.log(id);
    const data = await User.findByIdAndDelete(id);
    res.send({
        msg: "user Deleted",
        user: data,
    });
});

export const apiRoute = route;
