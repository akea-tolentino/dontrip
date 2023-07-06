module.exports = {
  secretOrKey: process.env.REACT_APP_SECRET_OR_KEY,
  mongoURI: process.env.REACT_APP_MONGO_URI,
  isProduction: process.env.NODE_ENV === 'production'
}