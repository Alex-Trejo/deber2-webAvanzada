import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
const port = 4000; // Puedes cambiar este puerto según tus necesidades
app.use(cors());
// Configura el transporte nodemailer
const transporter = nodemailer.createTransport({
  
  host: 'smtp.resend.com', // Reemplaza con tu servidor SMTP
  port: 465,
  secure: true, // true para el puerto 465, false para el resto
  auth: {
    user: 'resend', // Reemplaza con tu dirección de correo electrónico
    pass: 're_J58Gim6i_MofYEaBk2RVbEnkXPgxPwa97' // Reemplaza con tu contraseña de correo electrónico
  }
});

// Configura el middleware para analizar el cuerpo de las solicitudes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ruta para manejar las solicitudes de formulario POST desde el frontend
app.post('/send-email', (req, res) => {
  const { fullname, email, telephone, subject, message } = req.body;

  // Configura el contenido del correo
  const mailOptions = {
    from: 'lanchado10@gmail.com', // Reemplaza con tu dirección de correo electrónico
    to: 'lanchado10@gmail.com',   // Reemplaza con tu dirección de correo electrónico
    subject: subject,
    text: `Nombre: ${fullname}\nCorreo: ${email}\nTeléfono: ${telephone}\nMensaje: ${message}`
  };

  // Envía el correo
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error al enviar el correo');
    } else {
      console.log('Correo enviado: ' + info.response);
      res.status(200).send('Correo enviado correctamente');
    }
  });
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
