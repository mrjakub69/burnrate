export default function ResultSummary({
  label,
  value,
  description,
}) {
  return (
    <div className="mb-8 rounded-3xl bg-cyan-400 p-7 text-slate-950 shadow-lg shadow-cyan-400/20">
      <p className="font-semibold mb-2 opacity-80">
        {label}
      </p>

      <div className="text-5xl font-bold mb-3">
        {value}
      </div>

      {description && (
        <p className="text-lg font-medium opacity-80 leading-7">
          {description}
        </p>
      )}
    </div>
  );
}