import mongoose from 'mongoose';

export default () => {
  mongoose.connect('mongodb://localhost:27017/cronux', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  mongoose.connection.on('error', err => console.error(err));
};
