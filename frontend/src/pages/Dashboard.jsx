
import React, { useState, useEffect } from "react";
import { TrendingUp, Users, FileText, Receipt, DollarSign } from "lucide-react";
import StatsCard from "../components/dashboard/StatsCard";
import RecentActivity from "../components/dashboard/RecentActivity";
import QuickStats from "../components/dashboard/QuickStats";

export default function Dashboard() {
  const [stats, setStats] = useState({
    customers: 1230,
    quotes: 5890,
    invoices: 4300,
    totalRevenue: 3430,
    pendingRevenue: 1540
  });
  const [recentQuotes, setRecentQuotes] = useState([]);
  const [recentInvoices, setRecentInvoices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboardData();
  }, []);

  // Update AI context for dashboard
  useEffect(() => {
    if (stats) {
      window.dispatchEvent(new CustomEvent('updateAiContext', {
        detail: { contextData: stats, pageType: 'dashboard' }
      }));
    }
  }, [stats]);

  const loadDashboardData = async () => {
    try {
      console.log("nothing here");


      
      
    } catch (error) {
      console.error('Error loading dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="neumorphic-card p-6">
        <h1 className="text-3xl font-bold text-primary mb-2">Dashboard</h1>
        <p className="text-secondary">Overview of your business activity</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <StatsCard
          title="Total Customers"
          value={stats.customers}
          icon={Users}
          loading={loading}
        />
        <StatsCard
          title="Active Quotes"
          value={stats.quotes}
          icon={FileText}
          loading={loading}
        />
        <StatsCard
          title="Total Invoices"
          value={stats.invoices}
          icon={Receipt}
          loading={loading}
        />
        <StatsCard
          title="Revenue Earned"
          value={`$${stats.totalRevenue.toFixed(2)}`}
          icon={DollarSign}
          loading={loading}
        />
        <StatsCard
          title="Pending Revenue"
          value={`$${stats.pendingRevenue.toFixed(2)}`}
          icon={TrendingUp}
          loading={loading}
        />
      </div>

      {/* Quick Stats and Recent Activity */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <QuickStats
            totalRevenue={stats.totalRevenue}
            pendingRevenue={stats.pendingRevenue}
            loading={loading}
          />
        </div>
        <div className="lg:col-span-2">
          <RecentActivity
            quotes={recentQuotes}
            invoices={recentInvoices}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
}
