module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    "model",
    {
      value: DataTypes.STRING,
    },
    {}
  );
  model.associate = function (models) {
    // associations can be defined here
  };
  return model;
};
