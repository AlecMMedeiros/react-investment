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

export default function ResumePerMonth({
  investNames,
  selectedFundName,
  Result,
  ResultFullByMonth,
  handleClick,
}) {
  const childHandleClick = ({ currentTarget }) => {
    const selectedFundName = currentTarget.name;
    const fundId = investmentsData.investments.filter(
      (ele) => ele.description === selectedFundName
    );
    handleClick(fundId);
  };

  return (
    <>
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
            <YAxis type='number' domain={[0, 2000]} />
            <Tooltip />
            <Legend verticalAlign='top' height={36} />
            <Bar dataKey='Value' fill='#fe4a49'/>          
          </BarChart>
        </ResponsiveContainer>
        <div className='grid grid-cols-7 text-sm'>
          {investNames.map((ele) => (
            <button
              key={ele}
              className='bg-[#ef476f] hover:bg-[#f45b69] mx-1 p-2 rounded-lg text-slate-100'
              onClick={childHandleClick}
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
