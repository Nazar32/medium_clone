'use strict';

const jwt = require('jsonwebtoken');
const BearerStrategy = require('passport-http-bearer').Strategy;
const User = require('../models/user.model');
const config = require('../config');

const jwtBearerStrategy = new BearerStrategy(function(token, done) {
		/**
		 * Allow user to pass jwt authentication without token
		 */
		if (!token) {
				return done(null, null);
		}

		const secret = config.authentication.token.secret;
		jwt.verify(token, secret, function (err, decoded) {
				if (err)
						return done(err);

				const id = decoded.id;
				return User.findById(id).exec()
						.then(user => {
								if (!user)
										return done(null, false, {message: 'Incorrect Token'});

								return done(null, user);
						})
						.catch(err => done(err));
		});
});

class JwtStrategy {
		static async generateToken (userId) {
				const secret = config.authentication.token.secret;

				return new Promise((resolve, reject) => {
						jwt.sign({
								id: userId
						}, secret, {
								algorithm: 'HS256',
								expiresIn: 60 * 60 * 24 * config.authentication.token.expires.days
						}, function(err, token) {
								if (err) reject(err);
								return resolve(token);
						});
				});
		}

		static getPassportJWTStrategy () {
				return jwtBearerStrategy;
		}
}

module.exports = JwtStrategy;
