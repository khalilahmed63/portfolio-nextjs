import { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';

export default async function sendEmail(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, subject, message } = req.body;

  sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY as string);

  const msg = {
    to: 'panhwarkhalilahmed@gmail.com',
    from: 'me@khalilahmed.dev',
    subject,
    text: message,
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error sending email' });
  }
}
