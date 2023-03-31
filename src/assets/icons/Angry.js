import React from "react";

export default function Angry({ className }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2.005c5.523 0 10 4.477 10 10s-4.477 10-10 10-10-4.477-10-10 4.477-10 10-10Zm0 1.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17Zm0 9.993c1.631 0 3.16.655 4.281 1.796a.75.75 0 1 1-1.07 1.051A4.485 4.485 0 0 0 12 14.998a4.485 4.485 0 0 0-3.217 1.353.75.75 0 1 1-1.071-1.05A5.985 5.985 0 0 1 12 13.498ZM7.164 6.782a.75.75 0 0 1 .963-.18l.092.063 2.5 2a.75.75 0 0 1-.47 1.335 1.25 1.25 0 1 1-1.712-1.16L7.28 7.836a.75.75 0 0 1-.117-1.054Zm6.119 1.883 2.498-2a.75.75 0 0 1 1.02 1.095l-.082.076-1.256 1.004a1.25 1.25 0 1 1-1.705 1.288l-.007-.13a.75.75 0 0 1-.55-1.258l.082-.075 2.498-2-2.498 2Z"
        fill="currentColor"
      />
    </svg>
  );
}