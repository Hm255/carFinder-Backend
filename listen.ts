import dotenv from "dotenv";
import app from "./app.js";

dotenv.config({
  path: process.env.NODE_ENV === "production" ? ".env.production" : ".env",
});

const { PORT = 9090 } = process.env;
app.listen(PORT, () =>
  console.log(
    `Listening on ${PORT}... ${new Date().toISOString()} ${
      process.env.NODE_ENV
    }`
  )
);

console.log(
  `${new Date().toISOString()} ${process.env.NODE_ENV} ${
    process.env.PORT || PORT
  }`
);
