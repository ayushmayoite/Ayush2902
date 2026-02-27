import { Values } from "@/components/home/Values";
import { Hero } from "@/components/home/Hero";
import { StatsSection } from "@/components/home/StatsSection";
import { Newsletter } from "@/components/shared/Newsletter";
import { ContactTeaser } from "@/components/shared/ContactTeaser";
import { supabase } from "@/lib/db";
import Image from "next/image";

interface Founder {
  name: string;
  bio: string;
  image: string;
}

const HARDCODED_FOUNDERS: Founder[] = [
  {
    name: "Ayush Kumar",
    bio: "MBA from SMU-Singapore, 10+ years entrepreneur at One and Only, specializing in innovation and B2B negotiations, with consulting at PwC and EY.",
    image: "/images/ayush.jpg",
  },
  {
    name: "Arvind Kumar",
    bio: "Managing Director with 20+ years governance, co-founder since 2011.",
    image: "/images/arvind.jpg",
  },
];

function FounderCard({ name, bio, image }: Founder) {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg flex flex-col md:flex-row gap-6 items-center">
      <div className="w-32 h-32 md:w-48 md:h-48 shrink-0 overflow-hidden rounded-full md:rounded-lg">
        <Image
          src={image}
          alt={name}
          width={192}
          height={192}
          sizes="(max-width: 768px) 128px, 192px"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="space-y-3">
        <h3 className="text-2xl font-semibold text-neutral-900">{name}</h3>
        <p className="text-neutral-600 leading-relaxed text-sm md:text-base">
          {bio}
        </p>
      </div>
    </div>
  );
}

export default async function CompanyPage() {
  let founders = HARDCODED_FOUNDERS;
  try {
    const { data, error } = await supabase.from("founders").select("*");
    if (!error && data && data.length > 0) {
      founders = data as Founder[];
    }
  } catch {
    // use fallback silently
  }

  return (
    <main className="flex min-h-screen flex-col items-center bg-white">
      <Hero
        variant="small"
        title="Company Profile"
        subtitle="A family business with tradition and a vision for the future of work."
        showButton={false}
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
      />

      <section className="container px-6 2xl:px-0 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-light text-neutral-900 leading-tight">
              Quality made in{" "}
              <span className="text-primary italic">Germany.</span>
            </h2>
            <p className="text-xl font-light text-neutral-600 leading-relaxed">
              One and Only Furniture is a medium-sized family business with over
              100 years of history. We stand for high-quality office furniture
              and holistic furnishing concepts that adapt to people - not the
              other way around.
            </p>
            <p className="text-lg font-light text-neutral-500 leading-relaxed">
              Based in Coppenbrügge, we combine traditional craftsmanship with
              state-of-the-art production technologies. Our modular systems
              offer maximum flexibility for the ever-changing requirements of
              the modern working world.
            </p>
          </div>
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1000"
              alt="OandO Production"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="container px-6 2xl:px-0 py-12 bg-neutral-50/50 w-full">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl font-light text-center text-neutral-900 mb-12">
            Our Founders
          </h2>
          <div className="space-y-8 flex flex-col gap-4">
            {founders.map((founder, i) => (
              <FounderCard key={i} {...founder} />
            ))}
          </div>
        </div>
      </section>

      <Values />

      <section className="w-full bg-neutral-900 text-white py-24">
        <div className="container px-6 2xl:px-0">
          <div className="max-w-3xl space-y-8">
            <h2 className="text-4xl font-light">Our Philosophy</h2>
            <p className="text-xl font-light text-white/70 leading-relaxed">
              We don&apos;t just sell furniture; we create spaces where people
              feel comfortable and can work productively. Sustainability,
              ergonomics, and design are the cornerstones of our development
              process.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 text-white/60">
              <div className="space-y-4">
                <h4 className="text-white font-medium text-lg italic underline decoration-primary underline-offset-8">
                  Human-Centric
                </h4>
                <p>
                  Every product is designed with the user&apos;s wellbeing and
                  productivity in mind.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-white font-medium text-lg italic underline decoration-primary underline-offset-8">
                  Future-Proof
                </h4>
                <p>
                  Modular systems that can grow and change with your
                  organization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsSection
        title="Our History. Your Security."
        subtitle="From a local joinery to a specialist in ergonomic desk systems. We are proud of our roots and our innovation."
        stats={[
          { value: "1908", label: "Year founded" },
          { value: "4th", label: "Generation Family-run" },
          { value: "120k", label: "Sqm Production Area" },
          { value: "Red Dot", label: "Design Awards" },
        ]}
      />

      <Newsletter />

      <ContactTeaser />
    </main>
  );
}
