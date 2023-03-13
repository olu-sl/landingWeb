import { memo } from "react";

const Check = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect opacity="0.4" width={size} height={size} rx="4" fill="#76BBFF" />
    <path d="M6 12.3636L9.63636 16L16.9091 6" stroke="#1B2754" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
);
export default memo(Check);
