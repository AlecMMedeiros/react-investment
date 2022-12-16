import { useState, useEffect } from 'react';
import investmentsData from '../database/investments-2022-11-btc.json';
import { Helpers } from '../helpers';
import ResumePerMonth from './ResumePerMonth';
import ResumeYeldPerMonth from './ResumeYeldPerMonth';
import StatusBar from './StatusBar';

export default function ResumeFullGraphBar() {
  const [selectedFundId, setSelectedFundId] = useState(
    '3176856a-82cf-4ce9-8803-c65107c7ad5e'
  );
  const [selectedFundName, setSelectedFundName] = useState('Fundo de Ações');
  const [toggleGraph, setToggleGraph] = useState(false);
  const [windowSize, setWindowSize] = useState('');

  useEffect(() => {
    setWindowSize(window.innerWidth);
    window.addEventListener('resize', function () {
      setWindowSize(window.innerWidth);
    });
  }, []);

  const selectFund = investmentsData.reports.filter(
    (ele) => ele.investmentId === selectedFundId
  );
  const Filter = selectFund.sort((a, b) => a.month - b.month);
  const investNames = investmentsData.investments.map((ele) => ele.description).sort((a, b) => a.localeCompare(b));

  const handleClick = (fundId) => {
    setSelectedFundId(fundId[0].id);
    setSelectedFundName(fundId[0].description);
  };

  const ResultBrute = Filter.at(-1).value - Filter[0].value;
  const ResultRelative = ((ResultBrute / Filter[0].value) )*100;

  const YeldPerMonth = Helpers.yieldPerMonth(Filter);

  const ResultFullByMonth = Helpers.resumeByMonth(Filter);

  const HandletoggleGraph = () => {
    setToggleGraph((currentState) => !currentState);
  };

  return (
    <>
      <StatusBar
        fund={selectedFundName}
        Result={ResultBrute}
        ResultRelative={ResultRelative}
        toggleGraph={toggleGraph}
        HandletoggleGraph={HandletoggleGraph}
      />
      <section className='w-screen justify-center items-center'>
        <div className='w-screen flex justify-center'>
          <button
            className='bg-[#00ADB5] hover:bg-[#10A19D] rounded-md text-xs p-2 w-48 justify-self-center text-[#EEEEEE]'
            style={{ fontFamily: 'Josefin Sans, sans-serif' }}
            onClick={HandletoggleGraph}
          >
            {toggleGraph
              ? 'Exibir: Acumulado por mês'
              : 'Exibir: Retorno por mês'}
          </button>
        </div>
        {toggleGraph ? (
          <ResumeYeldPerMonth
            investNames={investNames}
            YeldPerMonth={YeldPerMonth}
            handleClick={handleClick}
            windowSize={windowSize}
          />
        ) : (
          <ResumePerMonth
            investNames={investNames}
            ResultFullByMonth={ResultFullByMonth}
            handleClick={handleClick}
            windowSize={windowSize}
          />
        )}
      </section>
    </>
  );
}
