'use strict'
const bcrypt = require('bcrypt')
const saltRounds = 10;

module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define('User', {
		first_name:{
			type: DataTypes.STRING
		},
		last_name:{
			type: DataTypes.STRING
		},
		username: {
			type: DataTypes.STRING,
		},
		email: {
			type: DataTypes.STRING,
		},
		password: {
			type: DataTypes.STRING,
		},
		country: {
			type: DataTypes.STRING,
		},
		about_me: {
			type: DataTypes.TEXT,
		},
		favored_genre: {
			type: DataTypes.ARRAY(DataTypes.STRING),
		},

		esports_fan: {
			type: DataTypes.BOOLEAN,
		}

}, {
		classMethods: {
			associate: function(models) {
				User.belongsToMany(models.Game, {through: 'GamerDetail'})
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
