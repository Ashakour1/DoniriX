import { Resend } from "resend";

export const sendEmail = async (req, res) => {
  const resend = new Resend("re_YUUy9psF_8voWNv9F847Z3kz3JJKQAfRy");
  const { subject, text, email } = req.body;

  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: "engshakrayare114@gmail.com",
      subject: subject,
      html: `<p>${text}</p>
      <p>${email}</p>
      `,
    });

    res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.log(error);
  }
};
