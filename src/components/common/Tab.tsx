'use client';

import React from 'react';

interface TabItem {
  id: string;
  label: string;
  icon: string;
}

interface TabProps {
  tabs: TabItem[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export const Tab: React.FC<TabProps> = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="tab-container">
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => onTabChange(tab.id)}
          >
            <span className="tab-icon">{tab.icon}</span>
            <span className="tab-label">{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}; 