const contactService = require("../services/contact-service");
const emailService = require("../services/send-email");

const storeContact = async (req, res, next) => {
  try {
    const newContact = req.body;
    console.log(req.body);
    emailService.sendEmail({
      to: newContact.email,
      subject: "SOMOS MAS - Gracias por contactarte", //
      text: emailService.emailLayout(newContact.name)
    });
    const contactStored = await contactService.createContact(newContact);
    res.json(contactStored);
  } catch (err) {
    res.json(err);
  }
};

module.exports = {
  storeContact,
};
