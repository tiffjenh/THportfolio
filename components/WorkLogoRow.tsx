import Image from "next/image";

const CONTAINER = "w-full max-w-[1040px] mx-auto px-6";

const LOGOS = [
  {
    name: "Stripe",
    href: "https://stripe.com/",
    src: "/images/stripe-logo.png",
  },
  {
    name: "AppDynamics",
    href: "https://www.cisco.com/c/en_au/solutions/data-center/appdynamics-application-performance-monitoring.html",
    src: "/images/appdynamics-logo.png",
  },
  {
    name: "Airbnb",
    href: "http://airbnb.com/",
    src: "/images/airbnb-logo.png",
  },
  {
    name: "Tapestry",
    href: "https://www.tapestry.com/",
    src: "/images/tapestry-logo.png",
  },
] as const;

export default function WorkLogoRow({ embedded = false }: { embedded?: boolean }) {
  const content = (
    <>
      <h2 className="text-sm tracking-wide text-neutral-700 lowercase mb-6">
        work experience
      </h2>
      <div className="flex flex-nowrap justify-start items-center gap-8 md:gap-10">
        {LOGOS.map(({ name, href, src }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${name} website`}
            className="flex items-center justify-center h-8 transition-all duration-200 ease-out hover:opacity-70 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/20 focus-visible:ring-offset-4 rounded-sm"
          >
            <Image
              src={src}
              alt={`${name} logo`}
              width={120}
              height={32}
              className="h-8 w-auto object-contain object-center"
            />
          </a>
        ))}
      </div>
    </>
  );

  if (embedded) {
    return <div className="mt-8">{content}</div>;
  }

  return (
    <section className={`${CONTAINER} py-12 md:py-16`}>
      {content}
    </section>
  );
}
