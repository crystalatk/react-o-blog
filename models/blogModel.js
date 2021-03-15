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
    const response = await db.any(
      `SELECT id, title, to_char(date, 'Mon DD, YYYY') as date, body FROM react_o_blog`
    );
    return response;
  }

  static async addNewPost(title, body) {
    const response = await db.result(
      `INSERT INTO react_o_blog (title, body) VALUES ($1, $2)`,
      [title, body]
    );
    return response;
  }
}

module.exports = BlogModel;
