import { useState } from 'react';
import investmentsData from '../database/investments-2022-11-btc.json';
import { resumeByMonth, yieldPerMonth } from '../helpers/helpers';
import ResumePerMonth from './ResumePerMonth';
import ResumeYeldPerMonth from './ResumeYeldPerMonth';
import StatusBar from './StatusBar';

export default function ResumeFullGraphBar() {
  const [selectedFundId, setSelectedFundId] = useState(
    '3176856a-82cf-4ce9-8803-c65107c7ad5e'
  );
  const [selectedFundName, setSelectedFundName] = useState('Fundo de Ações');
  const [toggleGraph, setToggleGraph] = useState(false);

  const selectFund = investmentsData.reports.filter(
    (ele) => ele.investmentId === selectedFundId
  );
  const Filter = selectFund.sort((a, b) => a.month - b.month);
  const investNames = investmentsData.investments.map((ele) => ele.description);

  const handleClick = (fundId) => {
    setSelectedFundId(fundId[0].id);
    setSelectedFundName(fundId[0].description);
  };

  const Result = Filter[11].value - Filter[0].value;

  const YeldPerMonth = yieldPerMonth(Filter); 
   
  const ResultFullByMonth = resumeByMonth(Filter);

  const HandletoggleGraph = (state) => {
    setToggleGraph(state)
  };

  return (
    <>
    <StatusBar fund={selectedFundName} Result={Result} toggleGraph={toggleGraph} HandletoggleGraph={HandletoggleGraph} />
      {toggleGraph ? (
        <ResumeYeldPerMonth
          investNames={investNames}
          selectedFundName={selectedFundName}
          Result={Result}
          YeldPerMonth={YeldPerMonth}
          handleClick={handleClick}
        />
      ) : (
        <ResumePerMonth
          investNames={investNames}
          selectedFundName={selectedFundName}
          Result={Result}
          ResultFullByMonth={ResultFullByMonth}
          handleClick={handleClick}
        />
      )}
    </>
  );
}
