const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (options) => {
  options.from = "ong.somos.mas.22@gmail.com";
  try {
    await sgMail.send(options);
  } catch (err) {
    console.log(err);
  }
};
//EXAMPLE OF THE RECEIVE PARAMETER
// sendEmail({
//   to: "marcosweis01@gmail.com",
//   subject: "Aca va el asunto", //
//   text: "Este es un email de prueba para testear si la función sendEmail funciona correctamente",
// });
module.exports = {
  sendEmail,
};
