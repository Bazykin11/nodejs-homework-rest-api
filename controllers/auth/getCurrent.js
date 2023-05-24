/** @format */

const getCurrent = (req, res) => {
  const { name, email, subscription, avatarURL } = req.user;
  res.json({
    status: "success",
    code: 200,
    data: {
      name,
      email,
      subscription,
      avatarURL,
    },
  });
};

module.exports = getCurrent;
