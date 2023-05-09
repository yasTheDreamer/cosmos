// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { transporter, mailOptions } from "../../config/nodemailer";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req && req.body) {
    if (req.method == "OPTIONS") {
      return res.status(200).json({ message: "preflight succeeded" });
    }

    let { name, email, message } = req.body;

    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: "portfolio message",
        html: `<h1>name: ${name}</h1><br/><h1>email : ${email}</h1><br/><h2>message : ${message}</h2>`,
      });

      return res.status(200).json({ message: "success" });
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }

  return res.status(400).json({ message: "Bad Request" });
}
