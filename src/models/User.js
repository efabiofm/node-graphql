import mongoose from 'mongoose';
import { preSave, comparePassword } from '../utils/encrypter';

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

schema.pre('save', preSave);
schema.methods.comparePassword = comparePassword;

export default mongoose.model('User', schema);
