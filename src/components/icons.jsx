const base = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export const CodeIcon = (props) => (
  <svg {...base} {...props}>
    <polyline points="8 6 2 12 8 18" />
    <polyline points="16 6 22 12 16 18" />
    <line x1="13.5" y1="4" x2="10.5" y2="20" />
  </svg>
);

export const ChartIcon = (props) => (
  <svg {...base} {...props}>
    <line x1="4" y1="20" x2="20" y2="20" />
    <rect x="6" y="12" width="3" height="8" rx="0.5" />
    <rect x="11" y="7" width="3" height="13" rx="0.5" />
    <rect x="16" y="3" width="3" height="17" rx="0.5" />
  </svg>
);

export const PulseIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M3 12h4l2 8 4-16 2 8h6" />
  </svg>
);

export const NetworkIcon = (props) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="4" r="2" />
    <circle cx="5" cy="18" r="2" />
    <circle cx="19" cy="18" r="2" />
    <line x1="12" y1="6" x2="5.7" y2="16.3" />
    <line x1="12" y1="6" x2="18.3" y2="16.3" />
    <line x1="7" y1="18" x2="17" y2="18" />
  </svg>
);

export const DatabaseIcon = (props) => (
  <svg {...base} {...props}>
    <ellipse cx="12" cy="5" rx="8" ry="3" />
    <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
    <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
  </svg>
);

export const LayersIcon = (props) => (
  <svg {...base} {...props}>
    <polygon points="12 2 2 8 12 14 22 8 12 2" />
    <polyline points="2 14 12 20 22 14" />
    <polyline points="2 11 12 17 22 11" />
  </svg>
);

export const GithubIcon = (props) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0C5.37 0 0 5.5 0 12.3c0 5.44 3.44 10.05 8.2 11.68.6.11.82-.27.82-.6 0-.29-.01-1.06-.02-2.08-3.34.75-4.04-1.65-4.04-1.65-.55-1.43-1.34-1.82-1.34-1.82-1.1-.77.08-.75.08-.75 1.21.09 1.85 1.27 1.85 1.27 1.08 1.9 2.82 1.35 3.51 1.03.11-.8.42-1.35.77-1.66-2.66-.31-5.47-1.36-5.47-6.06 0-1.34.46-2.43 1.22-3.29-.12-.31-.53-1.56.12-3.25 0 0 1-.33 3.3 1.25a11 11 0 0 1 6 0c2.28-1.58 3.29-1.25 3.29-1.25.65 1.69.24 2.94.12 3.25.76.86 1.22 1.95 1.22 3.29 0 4.71-2.81 5.75-5.49 6.05.43.38.81 1.14.81 2.31 0 1.67-.01 3.01-.01 3.42 0 .33.22.72.83.6C20.57 22.34 24 17.74 24 12.3 24 5.5 18.63 0 12 0Z" />
  </svg>
);

export const LinkedinIcon = (props) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.84-3.03-1.85 0-2.14 1.44-2.14 2.94v5.66H9.37V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.26 2.37 4.26 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
  </svg>
);

export const MailIcon = (props) => (
  <svg {...base} {...props}>
    <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
    <path d="m3 6 9 6.5L21 6" />
  </svg>
);

export const ArrowUpRightIcon = (props) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

export const FileTextIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M14.5 2.5H7a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8L14.5 2.5Z" />
    <polyline points="14 2.5 14 8 19.5 8" />
    <line x1="8.5" y1="13" x2="15.5" y2="13" />
    <line x1="8.5" y1="16.5" x2="15.5" y2="16.5" />
  </svg>
);
