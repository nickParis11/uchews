const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds125016.mlab.com:25016/uchews` || 'mongodb://localhost/uchewsdb', { mongoUseClient: true});

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to database');
});

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: String,
  password: String,
  googleId: String,
  sessionID: String,
  location: [String],
  distance: [String],
  budget: [Number],
  foodType: {type: Array, "default" : []},
  ateAt: {type: Array, "default" : []}
});

const User = mongoose.model('User', UserSchema);

const saveNewUser = (user, cb) => {
  console.log('new user in saveNewUser function: ', user);
  let newUser = new User({
    username: user.username || user.googleId,
    password: user.password,
    googleId: user.googleId,
    sessionID: user.sessionID,
    location: [],
    distance: [],
    budget:[],
    foodType:[],
    ateAt: []
  });
  newUser.save(cb);
}

const findOrCreateUser = (query, cb) => {
  User.findOne({ googleId: query.googleId }, (err, user) => {
    if (!user) {
      saveNewUser(query, (err2) => {
        if (err2) {
          console.log('error saving user: ', err2);
        } else {
          User.findOne(query, (err, user) => {
            cb(err, user);
          });
        }
      });
    } else {
      User.findOneAndUpdate({ username: user.username }, { sessionID: query.sessionID }, { new: true }, (err, updatedUser) => {
        if (err) {
          console.log('error saving in findOrCreate: ', err);
        }
        console.log('updated User: ', updatedUser);
        cb(err, user);
      });
    }
  });
}

module.exports.findOrCreateUser = findOrCreateUser;
module.exports.User = User;
module.exports.saveNewUser = saveNewUser;
