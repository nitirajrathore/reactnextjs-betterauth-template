import * as nodemailer from "nodemailer";
import { render, Options } from '@react-email/components';

/**
 * Sends an email using the SMTP configuration from environment variables.
 *
 * @param to - Recipient email address.
 * @param subject - Subject of the email.
 * @param text - Body text of the email.
 * @returns A promise that resolves when the email is sent successfully.
 */
export async function sendEmail({to, subject, text, html, react}:{to: string, subject: string, text?: string, html?: string, react?: {element: React.ReactElement, options?: Options} }): Promise<void> {
    // Create a transporter using SMTP configuration from environment variables
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST, // SMTP host
        port: parseInt(process.env.EMAIL_PORT || "587"), // SMTP port
        secure: process.env.EMAIL_SECURE === "true", // Use SSL/TLS
        auth: {
            user: process.env.EMAIL_USER, // SMTP username
            pass: process.env.EMAIL_PASS, // SMTP password
        },
    });

    if (react) {
        html = await render(react.element, react.options);
    }
    // Define the email options
    const mailOptions = {
        from: process.env.EMAIL_FROM || process.env.EMAIL_USER, // Sender address
        to,
        subject,
        text,
        html
    };

    // throw new Error("Email sending Not implemented");
    // Send the email
    try {
        return await transporter.sendMail(mailOptions);
        // console.log(`Email sent to ${to}`);
    } catch (error) {
        console.error("Error sending email:", error);
        throw error;
    }
}
