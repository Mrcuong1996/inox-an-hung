export function SectionTitle({ eyebrow, title, desc, center }: { eyebrow?: string; title: string; desc?: string; center?: boolean }) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent`}>
          <span className="h-1 w-1 rounded-full bg-accent" /> {eyebrow}
        </div>
      )}
      <h2 className="mt-3 font-display text-3xl font-bold text-primary text-balance md:text-4xl">{title}</h2>
      {desc && <p className="mt-3 text-muted-foreground leading-relaxed">{desc}</p>}
    </div>
  );
}
