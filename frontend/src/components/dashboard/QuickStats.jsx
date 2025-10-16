import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { TrendingUp, TrendingDown } from 'lucide-react';

export default function QuickStats({ totalRevenue, pendingRevenue, loading }) {
  const data = [
    { name: 'Earned', value: totalRevenue },
    { name: 'Pending', value: pendingRevenue }
  ];

  const COLORS = ['#4a8a6b', '#c8d4e8'];

  const total = totalRevenue + pendingRevenue;
  const earnedPercentage = total > 0 ? ((totalRevenue / total) * 100).toFixed(1) : 0;
  const pendingPercentage = total > 0 ? ((pendingRevenue / total) * 100).toFixed(1) : 0;

  return (
    <div className="neumorphic-card p-6">
      <h3 className="text-lg font-semibold text-primary mb-4">Revenue Overview</h3>

      {loading ? (
        <div className="space-y-4">
          <div className="neumorphic-inset h-40 animate-pulse rounded-lg"></div>
          <div className="space-y-2">
            <div className="neumorphic-inset h-4 animate-pulse rounded"></div>
            <div className="neumorphic-inset h-4 w-3/4 animate-pulse rounded"></div>
          </div>
        </div>
      ) : (
        <>
          {total > 0 ? (
            <>
              <div className="h-40 mb-4">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={data}
                      cx="50%"
                      cy="50%"
                      innerRadius={30}
                      outerRadius={60}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `$${value.toFixed(2)}`} />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="space-y-3">
                <div className="neumorphic-inset p-3 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[0] }}></div>
                      <span className="text-sm text-secondary font-medium">Earned Revenue</span>
                    </div>
                    <TrendingUp className="w-4 h-4 text-green-600" />
                  </div>
                  <div className="flex items-baseline justify-between">
                    <span className="text-lg font-bold text-primary">${totalRevenue.toFixed(2)}</span>
                    <span className="text-xs text-secondary">{earnedPercentage}%</span>
                  </div>
                </div>

                <div className="neumorphic-inset p-3 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[1] }}></div>
                      <span className="text-sm text-secondary font-medium">Pending Revenue</span>
                    </div>
                    <TrendingDown className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="flex items-baseline justify-between">
                    <span className="text-lg font-bold text-primary">${pendingRevenue.toFixed(2)}</span>
                    <span className="text-xs text-secondary">{pendingPercentage}%</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-300">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-secondary font-medium">Total Revenue</span>
                    <span className="text-xl font-bold text-primary">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-8 text-secondary">
              <div className="neumorphic-inset w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="w-8 h-8" />
              </div>
              <p className="font-medium">No revenue data yet</p>
              <p className="text-xs mt-1">Start creating invoices to see your revenue</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}
