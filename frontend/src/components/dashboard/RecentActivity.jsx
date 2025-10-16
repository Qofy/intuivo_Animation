import React, { useState } from 'react';
import { format } from 'date-fns';
import { FileText, Receipt, Eye, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function RecentActivity({ quotes, invoices, loading }) {
  const [activeTab, setActiveTab] = useState('quotes');

  const getStatusBadge = (status) => {
    const classes = `px-3 py-1 rounded-full text-xs font-medium status-${status}`;
    return (
      <span className={classes}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  return (
    <div className="neumorphic-card p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-primary">Recent Activity</h3>

        <div className="neumorphic-inset p-1 flex rounded-lg">
          <button
            onClick={() => setActiveTab('quotes')}
            className={`px-4 py-2 rounded-lg transition-all duration-200 text-sm font-medium ${
              activeTab === 'quotes'
                ? 'neumorphic-button text-primary'
                : 'text-secondary hover:text-primary'
            }`}
          >
            <FileText className="w-4 h-4 inline mr-2" />
            Quotes
          </button>
          <button
            onClick={() => setActiveTab('invoices')}
            className={`px-4 py-2 rounded-lg transition-all duration-200 text-sm font-medium ${
              activeTab === 'invoices'
                ? 'neumorphic-button text-primary'
                : 'text-secondary hover:text-primary'
            }`}
          >
            <Receipt className="w-4 h-4 inline mr-2" />
            Invoices
          </button>
        </div>
      </div>

      {loading ? (
        <div className="space-y-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="neumorphic-inset p-4 animate-pulse rounded-lg">
              <div className="flex justify-between items-center">
                <div className="space-y-2 flex-1">
                  <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                  <div className="h-3 bg-gray-300 rounded w-1/4"></div>
                </div>
                <div className="h-6 bg-gray-300 rounded w-16"></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-3 max-h-[400px] overflow-y-auto">
          {activeTab === 'quotes' && quotes.map((quote) => (
            <div key={quote.id} className="neumorphic-inset p-4 rounded-lg hover:shadow-inner transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h4 className="font-medium text-primary">{quote.title}</h4>
                    {getStatusBadge(quote.status)}
                  </div>
                  <p className="text-sm text-secondary flex items-center gap-2">
                    <span>{quote.customer_name}</span>
                    <span>•</span>
                    <span className="font-semibold">${quote.total_amount?.toFixed(2)}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {format(new Date(quote.created_date), 'MMM d, yyyy')}
                    </span>
                  </p>
                </div>
                <Link
                  to={createPageUrl(`QuoteDetails?id=${quote.id}`)}
                  className="neumorphic-button p-2 text-secondary hover:text-primary transition-colors ml-4"
                  title="View details"
                >
                  <Eye className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}

          {activeTab === 'invoices' && invoices.map((invoice) => (
            <div key={invoice.id} className="neumorphic-inset p-4 rounded-lg hover:shadow-inner transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h4 className="font-medium text-primary">{invoice.title}</h4>
                    {getStatusBadge(invoice.status)}
                  </div>
                  <p className="text-sm text-secondary flex items-center gap-2">
                    <span>{invoice.customer_name}</span>
                    <span>•</span>
                    <span className="font-semibold">${invoice.total_amount?.toFixed(2)}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {format(new Date(invoice.created_date), 'MMM d, yyyy')}
                    </span>
                  </p>
                </div>
                <Link
                  to={createPageUrl(`InvoiceDetails?id=${invoice.id}`)}
                  className="neumorphic-button p-2 text-secondary hover:text-primary transition-colors ml-4"
                  title="View details"
                >
                  <Eye className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}

          {((activeTab === 'quotes' && quotes.length === 0) || (activeTab === 'invoices' && invoices.length === 0)) && (
            <div className="text-center py-12 text-secondary">
              <div className="neumorphic-inset w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                {activeTab === 'quotes' ? <FileText className="w-8 h-8" /> : <Receipt className="w-8 h-8" />}
              </div>
              <p className="font-medium">No recent {activeTab} found</p>
              <p className="text-xs mt-1">Create your first {activeTab === 'quotes' ? 'quote' : 'invoice'} to get started</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
