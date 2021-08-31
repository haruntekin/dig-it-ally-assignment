const express = require("express");
let router = express.Router();
const checkUsername = require("../checkUsername");

router.post("/login", async (req, res) => {
  const ret = await checkUsername(req.body.username);
  res.status(200).send(ret);
});

module.exports = router;
