const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const app = require("./app.js");

const port = 8000;
app.listen(port, () => {
  console.log("Hello from Server !!");
});
