'use strict'
const bcrypt = require('bcrypt')
const saltRounds = 10;

module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define('User', {

		firstName: DataTypes.STRING,
		lastName: DataTypes.STRING,
		username: DataTypes.STRING,
		email: DataTypes.STRING,
		password: DataTypes.STRING

	}, {
		classMethods: {
			associate: function(models) {
				// creates associations between models
			}
		}
	})

	User.beforeCreate((user) =>
		new sequelize.Promise((resolve) => {
			bcrypt.hash(user.password, saltRounds, (err, hash) => {
				resolve(hash);
			})
		}).then((hash) => {
			user.password = hash;
		})
	)

	return User;
}
