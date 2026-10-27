/* eslint-disable @next/next/no-img-element */
interface LogoProps {
  variant: "light" | "dark";
  className?: string;
  style?: React.CSSProperties;
  alt?: string;
}

/** variant "light" = logo para fondos claros; "dark" = logo para fondos oscuros. */
export function Logo({ variant, className = "", style, alt = "bosvia" }: LogoProps) {
  return (
    <img
      src={variant === "light" ? "/assets/logo-light-t.png" : "/assets/logo-dark-t.png"}
      alt={alt}
      className={`w-auto ${className}`}
      style={style}
    />
  );
}
