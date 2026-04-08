interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-3">
      {eyebrow ? <p className="text-xs uppercase tracking-[0.2em] text-cyan">{eyebrow}</p> : null}
      <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">{title}</h2>
      {description ? <p className="text-slate-300">{description}</p> : null}
    </div>
  );
}
