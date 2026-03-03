import ResultsMetricsStrip from '../components/marketing/ResultsMetricsStrip';
import CaseStudyPlaceholderCard from '../components/marketing/CaseStudyPlaceholderCard';

export default function ResultsPage() {
  return (
    <main className="flex-1">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-background via-background to-accent/5 py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Results That Speak for Themselves
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            See how we help hospitality businesses achieve exceptional growth
          </p>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              What Our Clients Achieve
            </h2>
          </div>
          <ResultsMetricsStrip />
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="bg-accent/5 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Case Studies
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Detailed success stories from our client partnerships
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <CaseStudyPlaceholderCard />
            <CaseStudyPlaceholderCard />
            <CaseStudyPlaceholderCard />
          </div>
        </div>
      </section>
    </main>
  );
}
