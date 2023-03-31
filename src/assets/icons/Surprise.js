import React from "react";

export default function Surprise({ className }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2.005c5.523 0 10 4.477 10 10s-4.477 10-10 10-10-4.477-10-10 4.477-10 10-10Zm0 1.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17ZM12 13a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5ZM9 8.751a1.25 1.25 0 1 1 0 2.499A1.25 1.25 0 0 1 9 8.75Zm6 0a1.25 1.25 0 1 1 0 2.499 1.25 1.25 0 0 1 0-2.499Z"
        fill="currentColor"
      />
    </svg>
  );
}
