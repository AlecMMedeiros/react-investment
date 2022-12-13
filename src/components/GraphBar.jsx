import { useState } from 'react';
import investmentsData from '../database/investments-2022-11-btc.json';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import StatusBar from '../components/StatusBar';

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

  return (
    <>
      <StatusBar fund={selectedFundName} />
      <div>
        <ResponsiveContainer width='100%' aspect={3}>
          <BarChart
            width={500}
            height={300}
            data={Filter}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='month' name='Month' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey='value'
              type='number'
              fill='#8884d8'
              tickFormatter={(value) => value.toFixed('2')}
            />
          </BarChart>
        </ResponsiveContainer>
        <div className='grid grid-cols-7 text-sm'>
          {investNames.map((ele) => (
            <button
              key={ele}
              className='bg-green-400 mx-1 p-2 rounded-lg text-slate-100'
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
