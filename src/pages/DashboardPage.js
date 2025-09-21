import React from 'react';
import Sidebar from '../components/Sidebar';
import KanbanBoard from '../components/KanbanBoard';
import Header from '../components/Header';

const DashboardPage = () => {
  return (
    <div className="flex h-screen bg-neutral-white">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-y-auto">
        <Header />
        <KanbanBoard />
      </div>
    </div>
  );
};

export default DashboardPage;