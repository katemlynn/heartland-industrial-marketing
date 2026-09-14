export default function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="relative overflow-hidden px-6 pt-24 pb-20 lg:px-14">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(244,242,238,0.05) 0px, rgba(244,242,238,0.05) 1px, transparent 1px, transparent 88px), repeating-linear-gradient(0deg, rgba(244,242,238,0.05) 0px, rgba(244,242,238,0.05) 1px, transparent 1px, transparent 88px)",
          maskImage: "linear-gradient(180deg, rgba(0,0,0,0.85), rgba(0,0,0,0.1))",
          WebkitMaskImage: "linear-gradient(180deg, rgba(0,0,0,0.85), rgba(0,0,0,0.1))",
        }}
      />
      <p className="relative z-[2] font-label text-[13px] font-semibold tracking-[0.32em] text-brand uppercase">
        &mdash; {eyebrow}
      </p>
      <h1 className="relative z-[2] mt-3 max-w-xl text-4xl font-extrabold tracking-tight text-cream sm:text-5xl">
        {title}
      </h1>
      {description && (
        <p className="relative z-[2] mt-4 max-w-md font-body text-lg text-white/65">
          {description}
        </p>
      )}
    </header>
  );
}
