import express, { json } from "express";
import { PORT } from "./config.js";
import { apiRoute } from "./routes/api.js";
import { authRoute } from "./routes/auth.js";
const app = express();

app.use(json());

app.use("/api", apiRoute);
app.use("/auth", authRoute);

// Global catch
app.use((err, req, res, next) => {
    res.status(400).send({
        msg: "Internal server error",
        err,
    });
});

app.all("*", (req, res) => {
    res.status(404).send({
        msg: "page not found",
    });
});

app.listen(PORT, () => {
    console.log(PORT);
});
