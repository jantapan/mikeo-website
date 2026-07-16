const icons = [
  { name: "chat", path: <path d="M5 6.5h14v9H11l-5 3v-3H5z" /> },
  { name: "play", path: <path d="m10 8 6 4-6 4z" /> },
  { name: "camera", path: <><rect x="5" y="7" width="14" height="11" rx="3" /><circle cx="12" cy="12.5" r="3" /><path d="M9 7l1-2h4l1 2" /></> },
  { name: "heart", path: <path d="M12 19s-7-4.2-7-9a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 4.8-7 9-7 9Z" /> },
  { name: "send", path: <path d="m4 11 16-7-6 16-3-6-7-3Zm7 3 4-4" /> },
  { name: "tag", path: <path d="M9 4 7 20m10-16-2 16M4 9h16M3 15h16" /> },
] as const;

export function SocialOrbit() {
  return (
    <div className="social-orbit" aria-hidden="true">
      <div className="social-orbit-ring social-orbit-ring-outer" />
      <div className="social-orbit-ring social-orbit-ring-inner" />
      <div className="social-orbit-center">
        <strong>MIKEO</strong>
        <span>CONNECT</span>
      </div>
      {icons.map((icon, index) => (
        <span
          className={`social-orbit-icon social-orbit-icon-${index + 1}`}
          key={icon.name}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            {icon.path}
          </svg>
        </span>
      ))}
    </div>
  );
}
