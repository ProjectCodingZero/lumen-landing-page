import { Button } from "@/shared/index.ts";
import React from "react";
interface ServiceCardProps {
  title: string;
  description: string;
  badge?: string;
  children?: React.ReactNode;
  borderColor?: string;
  badgeColor?: string;
  backgroundColor?: string;
  iconBackgroundColor?: string;
}

export function ServiceCard(
  {
    title,
    description,
    badge,
    children,
    borderColor = "",
    badgeColor = "",
    iconBackgroundColor = "",
  }: ServiceCardProps,
): React.JSX.Element {
  return (
    <div
      className={`rounded-2xl p-8 shadow-xs shadow-indigo-300 ${borderColor} hover:shadow-md transition-shadow duration-300 flex flex-col justify-between relative group`}
    >
      <div>
        <div className="flex justify-between items-start mb-6">
          <div
            className={`p-3 rounded-xl ${
              iconBackgroundColor === "" || iconBackgroundColor === undefined
                ? "bg-green-300/90 group-hover:bg-green-400"
                : iconBackgroundColor
            }  w-fit h-fit `}
          >
            {children}
          </div>
          {badge && (
            <span
              className={`text-xs font-bold px-3 py-1 rounded-full ${badgeColor}`}
            >
              {badge}
            </span>
          )}
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-3">{title}</h3>
        <p className="text-slate-800 hover:text-black text-sm leading-relaxed mb-6">
          {description}
        </p>
      </div>
      <Button
        variant="none"
        className="bg-indigo-100 text-sm font-semibold text-indigo-800 hover:text-indigo-300 rounded-lg hover:bg-indigo-800 flex items-center gap-2 group w-fit"
      >
        <span>Saber más</span>
        <svg
          className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </Button>
    </div>
  );
}
