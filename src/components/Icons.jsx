const baseProps = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
};

export function ArrowUpRightIcon() {
  return (
    <svg {...baseProps}>
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

export function DownloadIcon() {
  return (
    <svg {...baseProps}>
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}

export function MailIcon() {
  return (
    <svg {...baseProps}>
      <path d="M4 6h16v12H4z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function PhoneIcon() {
  return (
    <svg {...baseProps}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.7 19.7 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.7 19.7 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
    </svg>
  );
}

export function MapPinIcon() {
  return (
    <svg {...baseProps}>
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function CheckCircleIcon() {
  return (
    <svg {...baseProps}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 3 3 5-6" />
    </svg>
  );
}

export function GithubIcon() {
  return (
    <svg {...baseProps}>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.8a3.3 3.3 0 0 0-.9-2.6c3-.3 6.1-1.5 6.1-6.6A5.2 5.2 0 0 0 19.8 5a4.8 4.8 0 0 0-.1-3.2s-1.1-.3-3.6 1.4a12.4 12.4 0 0 0-6.5 0C7.1 1.5 6 1.8 6 1.8A4.8 4.8 0 0 0 5.9 5a5.2 5.2 0 0 0-1.4 3.6c0 5 3.1 6.2 6.1 6.6a3.3 3.3 0 0 0-.9 2.6V22" />
    </svg>
  );
}

export function LinkedinIcon() {
  return (
    <svg {...baseProps}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <path d="M2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function VercelIcon() {
  return (
    <svg {...baseProps}>
      <path d="m12 4 9 16H3z" />
    </svg>
  );
}
