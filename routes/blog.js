"use strict";

const express = require("express"),
  router = express.Router(),
  BlogModel = require("../models/blogModel");

router.get("/", async (req, res) => {
  const blogData = await BlogModel.getAll();
  res.json(blogData).status(200);
});

module.exports = router;
