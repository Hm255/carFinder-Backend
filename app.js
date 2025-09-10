import express from "express";
import { getCars } from "./controller/controller.js";
import cors from "cors";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs";
const app = express();
app.use(cors());
app.use(express.json());
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.get("/api/cars", getCars);
app.all("/api/{*fail}", (req, res) => {
    res.status(404).json({ msg: "Item does not exist" });
});
const frontendPath = path.join(__dirname, "../frontend");
if (fs.existsSync(frontendPath)) {
    console.log(`✅ Serving static frontend from ${frontendPath}`);
    app.use(express.static(frontendPath));
    app.get("*", (req, res, next) => {
        if (req.path.startsWith("/api/"))
            return next();
        return res.sendFile(path.join(frontendPath, "index.html"));
    });
}
else {
    console.warn("⚠️ No frontend folder found — skipping static file serving");
    app.get("/", (req, res) => {
        res.send("Backend is running");
    });
}
// postgreSQL error handling
app.use((err, req, res, next) => {
    if (err.code === "22P02") {
        res.status(400).send({ msg: "Invalid type (type is wrong)" });
    }
    else if (err.code === "22003") {
        res.status(404).send({ msg: "Item does not exist, psql (error 22003)" });
    }
    else if (err.code === "23502") {
        res.status(404).send({ msg: "Item does not exist (error 23502)" });
    }
    else {
        next(err);
    }
});
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send({ msg: "Something went wrong" });
});
export default app;
