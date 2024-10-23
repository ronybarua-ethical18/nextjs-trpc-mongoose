import CustomerDashboard from '@/components/layout/customer/Dashboard';
import React from 'react';
import Header from '@/components/Header';

function Dashboard() {
  return (
    <>
      <Header />
      <div className="bg-[var(--select-box,#EEF0F4)]">
        <CustomerDashboard />
      </div>
    </>
  );
}

export default Dashboard;
