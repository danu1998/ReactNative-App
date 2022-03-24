const express = require("express");
const app = express();
const PORT = 5000;
app.listen(PORT, () => console.log(`Port run on ${PORT}`));
app.use(express.json());
const cors = require("cors");
app.use(cors());
const router = require("./src/routes");
app.use("/api/", router);
