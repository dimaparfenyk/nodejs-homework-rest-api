const contacts = require("../models/contacts");
const { RequestError } = require("../helpers");

const deleteContact = async (req, res) => {
  
        const { contactId } = req.params;
        const result = await contacts.removeContact(contactId);
        if (!result) {
            throw RequestError(404, "Not found");
        }
        res.json({
            message: "Contact deleted",
        })
};

module.exports = deleteContact;

