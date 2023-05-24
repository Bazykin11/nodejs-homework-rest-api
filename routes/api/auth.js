const express = require('express')
const router = express.Router()
const controllerWrapper = require("../../helpers/controllerWrapper");
const controller = require('../../controllers/auth');
const {auth, upload} = require('../../middlewares');

router.post("/register", controllerWrapper(controller.registration));
router.post("/login", controllerWrapper(controller.login));
router.get("/current", auth, controllerWrapper(controller.getCurrent));
router.get("/logout", auth, controllerWrapper(controller.logout));
router.patch("/upload", auth, upload.single("avatar"), controllerWrapper(controller.updateAvatar));

module.exports = router;