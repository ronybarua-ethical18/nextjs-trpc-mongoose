'use client';
import React from 'react';
import ProtectedLayout from '../ProtectedLayout';
import QuestionnairesModal from '@/components/QuestionnairesModal';

function CustomerDashboard() {
  return (
    <ProtectedLayout>
      <QuestionnairesModal isOpen={false} />
    </ProtectedLayout>
  );
}

export default CustomerDashboard;
