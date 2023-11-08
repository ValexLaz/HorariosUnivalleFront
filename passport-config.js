const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const axios = require("axios");

function initialize(passport, getUserByEmail, getUserById) {
  //function to autehnticate u ser
  const autehnticateUsers = async (email, password, done) => {
    const user = getUserByEmail(email);
    try {
        const response = await axios.post(
            "https://unihorariosapi.onrender.com/api/user/signing",
            {
              email,
              password,
            }
          );
          const token = response.data.data.token || false;
          if (!token) {
            return done(null, false, { message: "No user with that email" });
          }
      
          return done(null, user);
    } catch (error) {
        return done(null, false, { message: "No user with that email" });
    }

  };
  passport.use(
    new LocalStrategy({ usernameField: "email" }, autehnticateUsers)
  );
  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser((id, done) => {
    return done(null, getUserById(id));
  });
  passport.serializeUser((id, done) => {
    return done(null, getUserById(id));
  });
}

module.exports = initialize;
