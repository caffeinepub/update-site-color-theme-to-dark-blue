import LeadCaptureSection from '../components/leads/LeadCaptureSection';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="flex-1">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-background via-background to-accent/5 py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Let's Grow Your Hotel Business Together
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            Get in touch with our team of hospitality experts
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 md:py-28" id="audit-form">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="mb-6 text-3xl font-bold tracking-tight">Get in Touch</h2>
                <p className="text-lg text-muted-foreground">
                  Ready to transform your hotel operations? Fill out the form and our team will reach out within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">Email Us</h3>
                    <p className="text-muted-foreground">info@stayzy.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">Call Us</h3>
                    <p className="text-muted-foreground">Available Monday - Saturday, 9 AM - 6 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">Our Locations</h3>
                    <p className="text-muted-foreground">Indore, Dehradun, Goa, Pune, Gurugram</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Lead Capture Form */}
            <LeadCaptureSection />
          </div>
        </div>
      </section>
    </main>
  );
}
