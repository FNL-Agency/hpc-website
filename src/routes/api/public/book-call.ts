import { createFileRoute } from '@tanstack/react-router';
import { z } from 'zod';


const BookingRequest = z.object({
  name: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(320),
  company: z.string().trim().min(1).max(200),
});

export const Route = createFileRoute('/api/public/book-call')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return Response.json({ error: 'Invalid request' }, { status: 400 });
        }

        const parsed = BookingRequest.safeParse(body);
        if (!parsed.success) {
          return Response.json({ error: 'Invalid input' }, { status: 400 });
        }

        const { name, email, company } = parsed.data;

        const { sendTemplateEmail } = await import(
          '../../../lib/email-templates/send-email'
        );

        const result = await sendTemplateEmail(
          'book-call-request',
          'executive@hpc.agency',
          {
            templateData: { name, email, company },
            idempotencyKey: `book-call-${email.toLowerCase()}-${name.toLowerCase().replace(/\s+/g, '-')}`,
          },
        );

        // A suppressed recipient is still a successful submission from the
        // visitor's perspective.
        void result;
        return Response.json({ ok: true });
      },
    },
  },
});
