import Link from "next/link";

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}) {
  const styles = {
    primary:
      "bg-cyan-400 text-slate-950 hover:bg-cyan-300",

    secondary:
      "bg-slate-900 border border-slate-800 hover:border-cyan-400 text-white",
  };

  const classes = `
    inline-flex
    items-center
    justify-center
    px-8
    py-4
    rounded-2xl
    font-bold
    transition
    ${styles[variant]}
    ${className}
  `;

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
      >
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