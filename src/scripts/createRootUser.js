import UserModel from '../models/User';
import dbConnect from '../database';

(async () => {
  try {
    await dbConnect();
    const rootUser = await UserModel.findOne({ email: 'root' });
    if (rootUser) {
      console.info('Root user already exists');
      return;
    }
    await UserModel.create({
      name: 'root',
      email: 'root',
      password: 'root'
    });
    console.info('Root user created');
  } catch (error) {
    console.error(error);
  }
})();
