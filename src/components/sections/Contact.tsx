import { Mail, MapPin, Phone } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const email = 'blaisemu007@gmail.com';

export default function Contact() {
  const mailto = `mailto:${email}?subject=${encodeURIComponent('Project inquiry — Blaise Muhune')}&body=${encodeURIComponent('Hi Blaise,\n\nI am reaching out about:\n\n')}`;

  return (
    <section className="section-pad bg-muted/40" id="contact">
      <div className="container-page max-w-2xl">
        <SectionHeading
          label="Contact"
          title="Let's work together"
          description="Email is the fastest way to reach me. I typically reply within one business day."
        />

        <div className="card-surface mt-12 p-6 md:p-8">
          <ul className="space-y-4">
            <li>
              <a
                href={mailto}
                className="link-accent inline-flex items-center gap-3 text-lg"
              >
                <Mail className="h-5 w-5 shrink-0" aria-hidden="true" />
                {email}
              </a>
            </li>
            <li>
              <a
                href="tel:+12698618708"
                className="link-accent inline-flex items-center gap-3"
              >
                <Phone className="h-5 w-5 shrink-0" aria-hidden="true" />
                (269) 861-8708
              </a>
            </li>
            <li className="flex items-start gap-3 text-muted-foreground">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
              Remote — available worldwide
            </li>
          </ul>

          <a href={mailto} className="btn-primary mt-8 inline-flex">
            Start an email
          </a>

          <p className="mt-6 text-sm text-muted-foreground">
            Include a short brief: what you&apos;re building, timeline, and
            whether you need a full build or consulting.
          </p>
        </div>
      </div>
    </section>
  );
}
