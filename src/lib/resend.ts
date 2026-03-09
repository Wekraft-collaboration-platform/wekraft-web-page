
import { Resend } from 'resend'

const apiKey = process.env.RESEND_API_KEY

if (!apiKey) {
 console.error('[Resend] API key is missing!')
}

const resend = new Resend(apiKey)

export async function sendEmail({
  to,
  subject,
  html,
}: {
  to: string
  subject: string
  html: string
}) {
  return resend.emails.send({
    from: 'Wekraft <team@wekraft.xyz>',
    to,
    subject,
    html,
  })
}