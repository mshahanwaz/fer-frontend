import React from "react";

export default function Neutral({ className }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 8.751a1.25 1.25 0 1 1 0 2.499A1.25 1.25 0 0 1 9 8.75ZM15 8.751a1.25 1.25 0 1 1 0 2.499 1.25 1.25 0 0 1 0-2.499ZM8.25 15a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5h-7.5Z"
        fill="currentColor"
      />
      <path
        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm10-8.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17Z"
        fill="currentColor"
      />
    </svg>
  );
}
