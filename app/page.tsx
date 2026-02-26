import { Fragment } from "react";
import Hero from "@/components/Hero";
import SectionLabel from "@/components/SectionLabel";
import ProjectCard from "@/components/ProjectCard";

const CASE_STUDY_URL =
  "https://docs.google.com/document/d/1lhXru0kF-rFtjHCjwz-pCcjz9EhBo30JIA6AkvLSrXI/edit?tab=t.0";

const PROJECTS = [
  {
    title: "WWEEKLY",
    urlText: "www.wweekly.com",
    urlHref: "https://www.wweekly.com",
    ctaText: "Case Study",
    ctaHref: CASE_STUDY_URL,
    cardHref: "https://www.wweekly.com",
    description:
      "WWEEKLY is an AI-powered earnings dashboard for independent service providers that turns recurring sessions into real-time financial clarity through voice logging and instant business insights.",
    imageSrc: "/images/wweekly.png",
    imageAlt: "WWEEKLY project thumbnail",
    subtitleVariant: "boldItalic" as const,
    titleUppercase: true,
  },
  {
    title: "Wilbur",
    urlText: "www.withwilbur.com",
    urlHref: "https://www.withwilbur.com",
    ctaText: "Case Study",
    ctaHref: CASE_STUDY_URL,
    cardHref: "https://www.withwilbur.com",
    description:
      "Finance doesn't have to be complicated — Wilbur is an AI-powered financial literacy platform that builds personalized, structured learning paths so people can understand money and investing without the overwhelm.",
    imageSrc: "/images/wilbur.png",
    imageAlt: "Wilbur project thumbnail",
    subtitleVariant: "boldItalic" as const,
    titleUppercase: false,
  },
  {
    title: "Stripe - Connect",
    urlText: "Stripe Docs Site",
    urlHref: "https://docs.stripe.com/connect/express-dashboard",
    ctaText: "PM - Express",
    cardHref: "https://docs.stripe.com/connect/express-dashboard",
    description:
      "Stripe Express is a streamlined onboarding and management experience that enables platforms to quickly onboard sellers and give them simple tools to manage payouts, tax info, and account details.",
    imageSrc: "/images/stripe-connect.png",
    imageAlt: "Stripe Connect project thumbnail",
    subtitleVariant: "regular" as const,
    titleUppercase: false,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white py-6 pl-[10px] pr-6 md:py-8 md:pl-[10px] md:pr-8">
      <div className="w-full max-w-[1440px] mr-auto">
        <Hero />
        <section className="mt-4 pb-6">
          <SectionLabel className="mb-8">projects &amp; case studies</SectionLabel>

          <div className="flex flex-row flex-nowrap items-start">
            {PROJECTS.map((project, index) => (
              <Fragment key={project.title}>
                {index > 0 && (
                  <div
                    className="mx-10 w-px bg-black/20 self-stretch flex-shrink-0"
                    aria-hidden
                  />
                )}

                {/* IMPORTANT: fixed width wrapper so cards don't squeeze each other */}
                <div className="flex-none w-[540px]">
                  <ProjectCard
                    title={project.title}
                    urlText={project.urlText}
                    urlHref={project.urlHref}
                    ctaText={project.ctaText}
                    ctaHref={project.ctaHref}
                    description={project.description}
                    imageSrc={project.imageSrc}
                    imageAlt={project.imageAlt}
                    cardHref={project.cardHref}
                    subtitleVariant={project.subtitleVariant}
                    titleUppercase={project.titleUppercase}
                  />
                </div>
              </Fragment>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
