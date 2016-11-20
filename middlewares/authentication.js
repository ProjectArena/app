const passport      = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User          = require('../models').User
const bcrypt        = require('bcrypt')

function passwordsMatch(submittedPwd, storedHash) {
  return bcrypt.compareSync(submittedPwd, storedHash)
}

passport.use('local', new LocalStrategy(
  (username, password, done) => {
    User.findOne({
      where: { username: username }
    }).then((user) => {
      // user doesn't exist
      if (!user) {
        return done(null, false, {message: "User does not exist"})
      // user exists; check password
      }else if (passwordsMatch(password, user.password) === false) {
        return done(null, false, {message: "Passwords do not match"})
      // user exists + password is correct
      }else {
        return done(null, user, {message: "Successfully logged in"})
      }

    })
}))

// Saves user.id as the key to the whole user for this session
passport.serializeUser(
  (user, done) => {
    done(null, user.id)
})

// Retrieves the whole user using the user.id key
passport.deserializeUser(
  (id, done) => {
    User.findById(id)
      .then((user) => {
        done(null, user)
      })
  }
)

module.exports = passport;
