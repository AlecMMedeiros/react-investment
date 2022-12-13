import investmentsData from './investments-2022-11-btc.json';

const CompileData = () => {
  const investIds = investmentsData.investments.map((ele) => ele.id);
  const investNames = investmentsData.investments.map((ele) => ele.description);
  let compiledData = [];
  for (let index = 0; index < investIds.length; index++) {
    const id = investmentsData.reports[index].investmentId;
    const newObject = investmentsData.reports.filter(
      (ele) => ele.investmentId === id
    );
    compiledData.push({ [id]: { [investNames[index]]: newObject } });
  }
  return compiledData;
};

export const COMPILED_DATE = CompileData();