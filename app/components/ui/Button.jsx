import Link from "next/link";

export default function Button({
  href,
  children,
  variant = "primary",
  size = "lg",
  className = "",
}) {
  const variants = {
    primary:
      "bg-cyan-400 text-slate-950 border border-cyan-300 hover:bg-cyan-300 shadow-lg shadow-cyan-400/20",

    secondary:
      "bg-slate-900 text-white border border-slate-700 hover:border-cyan-400 hover:bg-slate-800",

    ghost:
      "bg-transparent text-slate-300 border border-slate-800 hover:border-cyan-400 hover:text-white",
  };

  const sizes = {
    md: "px-7 py-4 text-base rounded-2xl",
    lg: "px-9 py-5 text-lg rounded-2xl",
    xl: "px-10 py-6 text-xl rounded-3xl",
  };

  const classes = `
    inline-flex
    items-center
    justify-center
    gap-3
    font-bold
    transition
    duration-200
    hover:-translate-y-0.5
    active:translate-y-0
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes}>
      {children}
    </button>
  );
}