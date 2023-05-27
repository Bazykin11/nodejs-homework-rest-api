/** @format */

const {User} = require("../../models/user");
const bcrypt = require("bcrypt");
const { RequestError } = require("../../helpers");
const gravatar = require("gravatar");
const { nanoid } = require("nanoid");
const { sendMail, createVerifyEmail } = require("../../helpers");

const registration = async (req, res) => {
  const { email, password, subscription } = req.body;
  

    const user = await User.findOne({ email });
    if (user) {
      throw RequestError(409, `This ${email} is already in use`);
    }
  
  const avatarURL = gravatar.url(email);
  const verificationToken = nanoid();

  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, salt);
  const result = await User.create({
    email,
    password: hashedPassword,
    subscription,
    avatarURL,
    verificationToken
  });

 const mail = createVerifyEmail(email, verificationToken);

 await sendMail(mail);

  res.status(201).json({
    email: result.email,
    subscription: result.subscription,
  });
};

module.exports = registration;
