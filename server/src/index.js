const express = require("express");
require("./db/mongoose");
const cors = require("cors");
const Employee = require("./models/employee");
const employeeRouter = require("./routers/employee");

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

app.use(express.json());
app.use(employeeRouter);

app.listen(port, () => {
  console.log("server is up on port" + port);
});
