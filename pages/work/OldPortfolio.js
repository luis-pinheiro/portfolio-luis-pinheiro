import React from 'react';
import AllPagesLayout from '../../layouts/allPagesLayout';
import CardFolio from './../../components/CardFolio';
import CardHeader from '../../components/CardHeader';

const OldPortfolio = () => {
  return (
    <div className="pt-14">
      <CardHeader icon="fas fa-briefcase" title="Old OldPortfolio" />
      <CardFolio>
        <div className="flex flex-row border border-red-500">
          <div className="w-2/5 border border-green-500 "></div>
          <div>
            <img src="/images/work/profit.png" alt="OldPortfolio" className="w-full h-auto rounded-xl elevation-2" />
          </div>
        </div>
      </CardFolio>
    </div>
  );
};

OldPortfolio.Layout = AllPagesLayout;

export default OldPortfolio;
