export default function SectionLabel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2 className={`text-sm font-normal tracking-wide text-black lowercase ${className}`}>
      {children}
    </h2>
  );
}
