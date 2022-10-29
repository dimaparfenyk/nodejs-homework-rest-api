const express = require("express");

const ctrl = require("../../controllers/auth");

const { ctrlWrapper } = require("../../helpers");

const { validateBody, authenticate, upload } = require("../../middlewars");

const {schemas} = require("../../models/user")

const router = express.Router();

router.post("/signup", validateBody(schemas.registerSchema), ctrlWrapper(ctrl.signup));

router.get("/verify/:verificationToken", ctrlWrapper(ctrl.verify));
router.post("/verify", validateBody(schemas.verifyEmailSchema), ctrlWrapper(ctrl.resendVerify));

router.post("/login", validateBody(schemas.loginSchema), ctrlWrapper(ctrl.login));

router.get("/current", authenticate, ctrlWrapper(ctrl.getCurrent));

router.get("/logout", authenticate, ctrlWrapper(ctrl.logout));

router.patch("/avatars", authenticate, upload.single("avatar"), ctrlWrapper(ctrl.updateAvatar));

module.exports = router;
