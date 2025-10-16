import React from 'react';

export default function StatsCard({ title, value, icon: Icon, loading, trend }) {
  return (
    <div className="neumorphic-card p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm text-secondary mb-2 font-medium">{title}</p>
          <div className="text-2xl font-bold text-primary">
            {loading ? (
              <div className="neumorphic-inset h-8 w-24 animate-pulse rounded"></div>
            ) : (
              <span>{value}</span>
            )}
          </div>
          {trend && !loading && (
            <p className={`text-xs mt-2 ${trend.positive ? 'text-green-600' : 'text-red-600'}`}>
              {trend.positive ? '↑' : '↓'} {trend.percentage}% from last month
            </p>
          )}
        </div>
        <div className="neumorphic-inset p-3 rounded-lg">
          <Icon className="w-6 h-6 text-primary" />
        </div>
      </div>
    </div>
  );
}
