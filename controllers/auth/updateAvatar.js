

const uploadUserAvatar = require('../../helpers/uploadUserAvatar')
const User = require("../../models/user");


const updateAvatar = async (req, res) => {
  const { _id } = req.user;
  const avatarURL = uploadUserAvatar(_id, req.file);
  await User.findByIdAndUpdate(_id, { avatarURL });
  res.json({
    status: "success",
    code: 200,
    data: {
      avatarURL,
    },
  });
};



module.exports = updateAvatar