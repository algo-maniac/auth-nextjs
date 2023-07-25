import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function GET() {
  try {
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "soumya13102003@gmail.com",
        pass: "citqudnvxrvasgkg",
      },
    });
    let link = `${process.env.DOMAIN}/profile/1234`;
    const mailOptions = {
      from: "soumya13102003@gmail.com@gmail.com",
      to: "soumyajit13102003@gmail.com",
      subject: "Sending Email using Node.js",
      html: `<p>Click here to go to profile ${link}`,
    };

    const mailresponse = await transport.sendMail(mailOptions);
    return NextResponse.json({ response: mailresponse, success: true });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
