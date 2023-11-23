import nodemailer from "nodemailer";
import type { Actions } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();

        const transporter = nodemailer.createTransport({
            host: env.SMTP_HOST ?? '',
            port: parseInt(env.SMTP_PORT ?? '0'),
            secure: env.SMTP_SECURE === 'true',
            auth: {
                user: env.SMTP_USERNAME ?? '',
                pass: env.SMTP_PASSWORD ?? '',
            },
            tls: {
                // do not fail on invalid certs
                rejectUnauthorized: env.SMTP_REJECT_UNAUTHORIZED === 'true',
            },
        });

        const to = env.CONTACT_MAIL;
        if (!to) {
            console.error('CONTACT_MAIL not defined');
            return;
        }
        const name = data.get('name')?.toString() ?? '[unknown]';
        const opts = {
            from: data.get('email')?.toString(),
            to: to,
            subject: `Message from ${name}`,
            text: data.get('message')?.toString(),
        };
        console.log(opts);
        try {
            await transporter.sendMail(opts);
        } catch (e) {
            console.log(e);
        }
    }
} satisfies Actions;