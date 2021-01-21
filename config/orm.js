const connection = require("./connection.js");

const orm = {
  selectAll(tableInput, cb) {
    const queryString = `SELECT * FROM ${tableInput}`;
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne(table, name, devoured, cb) {
    let queryString = `INSERT INTO ${table} (burger_name, devoured) VALUES (?,?)`;
    connection.query(queryString, [name, devoured], (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  updateOne(table, key, value, condition, cb) {
    let queryString = `UPDATE ${table} SET ${key}=${value} WHERE ${condition}`;
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
};

module.exports = orm;
