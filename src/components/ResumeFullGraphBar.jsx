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

  const HandletoggleGraph = () => {
    setToggleGraph((currentState) => !currentState);
  };

  return (
    <>
      <StatusBar
        fund={selectedFundName}
        Result={Result}
        toggleGraph={toggleGraph}
        HandletoggleGraph={HandletoggleGraph}
      />
      <section className='w-screen justify-center items-center'>
        <div className='w-screen flex justify-center'>
          <button
            className='bg-[#00ADB5] hover:bg-[#10A19D] rounded-md text-xs p-2 w-36 justify-self-center text-[#EEEEEE]'
            style={{ fontFamily: 'Josefin Sans, sans-serif' }}
            onClick={HandletoggleGraph}
          >
            {toggleGraph ? 'View: Value Per Month' : 'View: Yeld'}
          </button>
        </div>
        {toggleGraph ? (
          <ResumeYeldPerMonth
            investNames={investNames}
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
      </section>
    </>
  );
}
