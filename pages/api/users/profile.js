// pages/api/hello.js
import nc from 'next-connect';
import User from '../../../models/User';
import db from '../../../utils/db';
import bcrypt from 'bcryptjs';
import { isAuth, signToken } from '../../../utils/auth';

const handler = nc();
handler.use(isAuth);
handler.put(async (req, res) => {
  await db.connect();
  //const user = await User.findOne({ email: req.body.email });
  const user = await User.findById(req.user._id);
  user.name = req.body.name;
  user.email = req.body.email;
  user.password = req.body.password
    ? bcrypt.hashSync(req.body.password)
    : user.passwprd;
  await user.save();

  await db.disconnect();

  const token = signToken(user);
  res.send({
    token,
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
  });
});
export default handler;
