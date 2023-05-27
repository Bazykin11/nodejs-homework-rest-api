/** @format */

const express = require("express");
const router = express.Router();
const controllerWrapper = require("../../helpers/controllerWrapper");
const controller = require("../../controllers/auth");
const { auth, upload, validation } = require("../../middlewares");


const schemas = require("../../models/user");

router.post("/register", controllerWrapper(controller.registration));

router.post("/login", controllerWrapper(controller.login));

router.get("/current", auth, controllerWrapper(controller.getCurrent));

router.get("/logout", auth, controllerWrapper(controller.logout));

router.patch(
  "/upload",
  auth,
  upload.single("avatar"),
  controllerWrapper(controller.updateAvatar)
);

router.get("/verify/:verificationToken", controllerWrapper(controller.verify));

router.post(
  "/verify", validation(schemas.verifyEmailSchema),
  controllerWrapper(controller.resendEmail)
);

module.exports = router;


