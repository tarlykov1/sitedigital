interface StatBlockProps {
  value: string;
  label: string;
}

export function StatBlock({ value, label }: StatBlockProps) {
  return (
    <div className="tech-panel p-6 text-center">
      <p className="text-3xl font-semibold text-white">{value}</p>
      <p className="mt-2 text-sm text-slate-300">{label}</p>
    </div>
  );
}
