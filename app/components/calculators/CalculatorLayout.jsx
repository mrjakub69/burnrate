export default function CalculatorLayout({
  title,
  description,
  children,
}) {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">
          {title}
        </h1>

        <p className="text-slate-400 text-xl mb-10">
          {description}
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {children}
        </div>
      </div>
    </main>
  );
}