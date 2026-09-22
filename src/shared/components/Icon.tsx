/*
import { useHover } from "@/shared";
interface IconProps extends React.SVGProps<SVGSVGElement>{
    height?: number | string,
    width?: number | string,
    myColor?: [string, string], // color RGB
    hoverColor?: [string, string],
    isHovered?: boolean,
}

export function Icon({height = 100, width=100, myColor: color=["#0284c7", "#0369a1"], isHovered = false, hoverColor = ["#49B6FF", "#779BE7"], ...props}: IconProps) {

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"
        className="fill-[#f1883d] group-hover:fill-[#009ba4] transition-colors"
        width={width}
        height={height}>
        <defs>
            <linearGradient id="pawGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#0284c7" />
                <stop offset="100%" stop-color="#0369a1" />
            </linearGradient>
        </defs>

        <circle cx="250" cy="250" r="220" fill="#f8fafc" stroke="#e2e8f0" stroke-width="4" />

        <g transform="translate(0, 10)">
            <path d="M250 240 C210 240 190 270 190 305 C190 340 215 375 250 375 C285 375 310 340 310 305 C310 270 290 240 250 240 Z"
                fill="url(#pawGradient)" />

        <ellipse cx="195" cy="185" rx="23" ry="35" transform="rotate(-12 195 185)" fill="url(#pawGradient)" />

        <ellipse cx="305" cy="185" rx="23" ry="35" transform="rotate(12 305 185)" fill="url(#pawGradient)" />


        <ellipse cx="135" cy="245" rx="21" ry="32" transform="rotate(-35 135 245)" fill="url(#pawGradient)" />

        <ellipse cx="365" cy="245" rx="21" ry="32" transform="rotate(35 365 245)" fill="url(#pawGradient)" />
        </g>
        </svg>
  );
}
*/
