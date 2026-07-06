export default function ResultRow({
  label,
  value,
  strong = false,
}) {
  return (
    <div className="flex justify-between border-b border-slate-800 pb-4">
      <span className="text-slate-400">
        {label}
      </span>

      <span className={strong ? "text-cyan-400 font-bold" : "font-semibold"}>
        {value}
      </span>
    </div>
  );
}