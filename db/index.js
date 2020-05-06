"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const config = require("./config");
const basename = path.basename(__filename);
const db = {};

console.log("BAM", process.env.DATABASE_URL);

let sequelize = new Sequelize(process.env.DATABASE_URL, config);

fs.readdirSync(path.join(__dirname, "models"))
	.filter((file) => {
		return (
			file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
		);
	})
	.forEach((file) => {
		const model = sequelize.import(path.join(__dirname, "models", file));
		db[model.name] = model;
	});

Object.keys(db).forEach((modelName) => {
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
