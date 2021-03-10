"use strict";

const db = require("./conn");

class BlogModel {
  constructor(id, title, date, body) {
    this.id = id;
    this.title = title;
    this.date = date;
    this.body = body;
  }

  static async getAll() {
    const response = await db.any(`SELECT * FROM react_o_blog`);
    return response;
  }
}

module.exports = BlogModel;
