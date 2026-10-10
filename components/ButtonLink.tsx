import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "light";
  small?: boolean;
  className?: string;
};

export default function ButtonLink({
  href,
  children,
  variant = "primary",
  small = false,
  className = "",
}: ButtonLinkProps) {
  const classes = [
    "btn",
    variant === "primary" ? "btn-primary" : "btn-light",
    small ? "btn-small" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <a className={classes} href={href}>
      {children}
    </a>
  );
}
