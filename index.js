const EmailService = require('./EmailService')


EmailService.sendText(["imozen.info@gmail.com"], 'A melhor empresa do mundo!', 'Olá quero falar consigo', '<div style="width: 500px; height: 500px; background-color: #d6ae10;"><div style="display: flex; background-color: white; width: 500px; height: 20%; padding-left: 4%;"><img style="height:100%;" src="https://www.metalpro.pt/img/metalpro.png?1545522387" /></div><div style="margin-top: 6.5%; margin-left: 6%; height: 65%; width: 85%; background-color: white; font-family: sans-serif; font-size: 12px; padding: 7px; border-radius: 10px; outline: none; text-align:justify;" contenteditable="true">Escreva aqui <a href="http://127.0.0.1:8080/emailverify/rafael@paiva.its" style="color: #d6ae10;">Carregue aqui para validar os seus dados.</a></div></div>')
  .then(() => {
    // Email sent successfully
  })
  .catch(() => {
    // Error sending email
  })