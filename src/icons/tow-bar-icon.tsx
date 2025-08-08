import type { SvgProps } from "../types";

export function TwoBarIcon({ ...props }: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 4v16" />
      <path d="M9 4v16" />
    </svg>
  );
}

export type IconComponent = typeof TwoBarIcon;
