import express from 'express';
import cors from 'cors';
import { sendEmail } from './email.js';

const app = express();
app.use(express.json());
app.use(cors()); // Habilitar CORS para todas las solicitudes

app.post('/send-email', (req, res) => {
  const { fullname, email, telephone, subject, message } = req.body;

  sendEmail({ fullname, email, telephone, subject, message });

  res.status(200).send('Email sent successfully');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
