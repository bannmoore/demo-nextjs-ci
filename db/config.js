require("dotenv").config();

module.exports = {
	use_env_variable: "DATABASE_URL",
	define: {
		timestamps: true,
		underscored: true,
		underscoredAll: true,
		createdAt: "created_at",
		updatedAt: "updated_at",
	},
	dialect: "postgres",
	logging: console.log,
	dialectOptions: {
		ssl: false,
	},
};
