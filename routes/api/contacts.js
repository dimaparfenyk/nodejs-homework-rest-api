const express = require('express');

const ctrl = require("../../controllers");

const { ctrlWrapper } = require("../../helpers");

const { validateBody, isValidId, authenticate } = require("../../middlewars");

const {schemas} = require("../../models/contact");

const router = express.Router();

router.get('/',authenticate,  ctrlWrapper(ctrl.getAll));

router.get('/:contactId',authenticate,  isValidId, ctrlWrapper(ctrl.getById));

router.post('/',authenticate, validateBody(schemas.contactsSchema),  ctrlWrapper(ctrl.add));

router.delete('/:contactId',authenticate, isValidId, ctrlWrapper(ctrl.deleteContact));

router.put('/:contactId',authenticate,  isValidId, validateBody(schemas.contactsSchema), ctrlWrapper(ctrl.updateById));

router.patch('/:contactId/favorite',authenticate,  isValidId, validateBody(schemas.updateFavoriteSchema), ctrlWrapper(ctrl.updateStatusContact));

module.exports = router;
