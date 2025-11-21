// src/components/logo.tsx

export function Logo({
  className = "",
  size = "lg",
}: {
  className?: string;
  size?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl";
}) {
  const sizes = {
    xxs: "text-[0.75rem]",
    xs: "text-[0.87rem]",
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl",
    xl: "text-4xl",
  };

  return (
    <span className={`font-logo tracking-tight ${sizes[size]} ${className}`}>
      <span className="font-normal text-primary">dat</span>
      <span className="font-bold text-secondary">ahora</span>
    </span>
  );
}
