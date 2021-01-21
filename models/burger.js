const orm = require("../config/orm.js");

const burger = {
  viewAllValues(cb) {
    orm.selectAll("burgers", (res) => cb(res));
  },
  createOneValue(name, devoured, cb) {
    orm.insertOne("burgers", name, devoured, (res) => cb(res));
  },
  updateOneValue(key, value, condition, cb) {
    orm.updateOne("burgers", key, value, condition, (res) => cb(res));
  },
};

module.exports = burger;
