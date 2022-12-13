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

export default function ResumeYeldPerMonth({
  investNames,
  selectedFundName,
  Result,
  YeldPerMonth,
  handleClick,
}) {
  const childHandleClick = ({ currentTarget }) => {
    const selectedFundName = currentTarget.name;
    const fundId = investmentsData.investments.filter(
      (ele) => ele.description === selectedFundName
    );
    handleClick(fundId);
  };
  console.log(YeldPerMonth);
  return (
    <>
      <div>
        <ResponsiveContainer width='100%' aspect={3}>
          <BarChart
            width={500}
            height={300}
            data={YeldPerMonth}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='Month' name='Month' />
            <YAxis />
            <Tooltip />
            <Legend verticalAlign='top' height={36} />
            <Bar dataKey='Yeld' fill='#fe4a49' />
          </BarChart>
        </ResponsiveContainer>
        <div className='grid grid-cols-1 gap-2 text-sm md:grid-cols-7 md:gap-0'>
          {investNames.map((ele) => (
            <button
              key={ele}
              className='bg-[#ef476f] hover:bg-[#f45b69] mx-1 p-2 rounded-lg text-slate-100 text'
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
