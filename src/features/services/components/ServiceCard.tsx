import React from 'react';
interface ServiceCardProps {
  title: string;
  description: string;
  badge?: string;
    children: React.ReactNode;
    borderColor?: string;
    badgeColor?: string;
}
export function ServiceCard({ title, description, badge, children, borderColor, badgeColor }: ServiceCardProps): React.JSX.Element {
  return (
    <div className={`bg-white rounded-2xl p-8 shadow-sm border ${borderColor} hover:shadow-md transition-shadow duration-300 flex flex-col justify-between relative`}>
      <div>
        <div className="flex justify-between items-start mb-6">
          <div className="p-3 rounded-xl bg-slate-50">
            {children}
          </div>
          {badge && (
            <span className={`text-xs font-bold px-3 py-1 rounded-full ${badgeColor}`}>
              {badge}
            </span>
          )}
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-3">{title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-6">{description}</p>
      </div>
      <button className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-2 group w-fit">
        <span>Saber más</span>
        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};