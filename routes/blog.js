"use strict";

const express = require("express"),
  router = express.Router(),
  BlogModel = require("../models/blogModel");

router.get("/", async (req, res) => {
  const blogData = await BlogModel.getAll();
  res.json(blogData).status(200);
});

router.post("/", async (req, res) => {
  const { title, body } = req.body;
  const response = await BlogModel.addNewPost(title, body);
  if (response.rowCount >= 1) {
    res.sendStatus(200);
  } else {
    res.sendStatus(500);
  }
});

module.exports = router;
