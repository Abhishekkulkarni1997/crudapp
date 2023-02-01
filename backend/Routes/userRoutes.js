const express = require("express");
const app = require("../app");
const router = express.Router();
const {
  home,
  createuser,
  getusers,
  deleteuser,
  updateuser,
} = require("../controller/userController");

router.get("/", home);

router.post("/createuser", createuser);

router.get("/getusers", getusers);
router.delete("/deleteuser/:id", deleteuser);
router.put("/updateuser/:id", updateuser);

module.exports = router;
