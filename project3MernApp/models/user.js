const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 
const UserSchema = new Schema({
  username: String,
  password: String,
  email: String,
  bio: String
});

const User = mongoose.define('User', UserSchema);

module.exports = User;