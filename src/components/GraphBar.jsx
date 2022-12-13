import { useState } from 'react';
import investmentsData from '../database/investments-2022-11-btc.json';
import {
  BarChart,
  LabelList,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import StatusBar from '../components/StatusBar';
import { resumeByMonth } from '../helpers/helpers';

export default function GraphBar() {
  const [selectedFundId, setSelectedFundId] = useState(
    '3176856a-82cf-4ce9-8803-c65107c7ad5e',
  );
  const [selectedFundName, setSelectedFundName] = useState('Fundo de Ações');
  const selectFund = investmentsData.reports.filter(
    (ele) => ele.investmentId === selectedFundId,
  );
  const Filter = selectFund.sort((a, b) => a.month - b.month);
  const investNames = investmentsData.investments.map((ele) => ele.description);

  const handleClick = ({ currentTarget }) => {
    const selectedFundName = currentTarget.name;
    const fundId = investmentsData.investments.filter(
      (ele) => ele.description === selectedFundName,
    );
    setSelectedFundId(fundId[0].id);
    setSelectedFundName(fundId[0].description);
  };

  const Result = Filter[11].value - Filter[0].value;

  const monthReturn = [];

  for (let i = 0; i < investNames.length; i++) {
    const mReturn = Filter[i + 1].value / Filter[i].value - 1;
    monthReturn.push(mReturn.toFixed(2));
  }

  const ResultFullByMonth = resumeByMonth(Filter);

  return (
    <>
      <StatusBar fund={selectedFundName} Result={Result} />
      <div>
        <ResponsiveContainer width='100%' aspect={3}>
          <BarChart
            width={500}
            height={300}
            data={ResultFullByMonth}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='Month' name='Month' />
            <YAxis type='number' domain={[0, 3000]} />
            <Tooltip />
            <Legend />
            <Bar dataKey='Value' fill='#fe4a49'>
              <LabelList
                dataKey='Value'
                position='insideStart'
                style={{ fill: 'white' }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <div className='grid grid-cols-7 text-sm'>
          {investNames.map((ele) => (
            <button
              key={ele}
              className='bg-[#ef476f] hover:bg-[#f45b69] mx-1 p-2 rounded-lg text-slate-100'
              onClick={handleClick}
              name={ele}
            >
              {ele}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
