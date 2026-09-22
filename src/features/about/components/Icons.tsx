import React from "react";
interface IconProps {
  className?: string;
  size?: number;
}
export const HeartIcon: React.FC<IconProps> = (
  { className = "", size = 24 },
) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.72-8.72 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

export const StethoscopeIcon: React.FC<IconProps> = (
  { className = "", size = 24 },
) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M4.8 2.1A1.1 1.1 0 0 0 3.7 3.2V8a5 5 0 0 0 10 0V3.2a1.1 1.1 0 0 0-1.1-1.1H11" />
    <path d="M8 13v2a4 4 0 0 0 8 0v-1.5" />
    <circle cx="18" cy="12" r="2" />
  </svg>
);

export const DocumentIcon: React.FC<IconProps> = (
  { className = "", size = 24 },
) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

export const ScissorsIcon: React.FC<IconProps> = (
  { className = "", size = 24 },
) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="6" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <line x1="20" y1="4" x2="8.12" y2="15.88" />
    <line x1="14.47" y1="14.47" x2="20" y2="20" />
    <line x1="8.12" y1="8.12" x2="12" y2="12" />
  </svg>
);

export const PawIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 12.5c-2.5 0-4.5 1.8-4.5 4 0 1.7 1.3 3.5 3 3.5h3c1.7 0 3-1.8 3-3.5 0-2.2-2-4-4.5-4zM6.5 11c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm11 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-8.5-4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
  </svg>
);

export const ClinicIllustrationSvg: React.FC<IconProps> = (
  { className = "" },
) => (
  <svg
    viewBox="0 0 400 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect width="400" height="300" rx="16" fill="#EBF6F9" />
    <path d="M40 260H360V280H40V260Z" fill="#BEE1E6" />
    <rect
      x="60"
      y="80"
      width="120"
      height="180"
      rx="8"
      fill="#FFFFFF"
      stroke="#009688"
      strokeWidth="3"
    />
    <rect x="80" y="100" width="80" height="50" rx="4" fill="#E0F2F1" />
    <rect x="80" y="160" width="80" height="50" rx="4" fill="#E0F2F1" />
    <circle cx="280" cy="180" r="45" fill="#26A69A" opacity="0.2" />
    <path
      d="M260 170C260 158.954 268.954 150 280 150C291.046 150 300 158.954 300 170V210H260V170Z"
      fill="#00897B"
    />
    <circle cx="280" cy="135" r="18" fill="#00897B" />
  </svg>
);
