export const monthTable = {
  1: 'Jan',
  2: 'Fev',
  3: 'Mar',
  4: 'Abr',
  5: 'Mai',
  6: 'Jun',
  7: 'Jul',
  8: 'Ago',
  9: 'Set',
  10: 'Out',
  11: 'Nov',
  12: 'Dez',
};
export const resumeByMonth = (Filter) => {
  const newObject = [];

  for (let index = 0; index < Filter.length; index++) {
    const month = monthTable[Filter[index].month];
    const value = Number(Filter[index].value.toFixed(2));
    newObject.push({
      Month: month,
      Value: value,
    });
  }

  return newObject;
};

export const yieldPerMonth = (Filter) => {
  const newObject = [];
  for (let index = 0; index < Filter.length; index++) {
    if (index + 1 < Filter.length) {
      const month = monthTable[Filter[index + 1].month];
      const yeld = Number(
        (Filter[index + 1].value / Filter[index].value - 1).toFixed(2)
      );
      newObject.push({
        Month: month,
        Yeld: (yeld * 100).toFixed(2),
      });
    }
  }
  return newObject;
};

export const CompareFunds = (funds, Filter) => {
  const newObject = [];
  for (let index = 0; index < Filter.length; index++) {
    if (index + 1 < Filter.length) {
      if (Filter[index].month === 12) {
        const fundName = funds.filter(
          (ele) => ele.id === Filter[index].investmentId
        )[0].description;

        const fund = Filter[index].investmentId;
        const totalYeld = Number(Filter[index].value);

        newObject.push({
          FundName: fundName,
          Fund: fund,
          totalYeld: totalYeld - 1000,
        });
      }
    }
  }
  return newObject;
};
