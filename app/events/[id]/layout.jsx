import React from 'react';

const DetailPageLayout = ({ children }) => {
  return (
    <div className="bg-slate-400 min-h-screen">
      {children}
    </div>
  );
};

export default DetailPageLayout;