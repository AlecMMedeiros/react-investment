export const resumeByMonth = (Filter) => {
  const monthTable = {
    1: 'Jan',
    2: 'Feb',
    3: 'Mar',
    4: 'Apr',
    5: 'May',
    6: 'Jun',
    7: 'Jul',
    8: 'Aug',
    9: 'Sep',
    10: 'Oct',
    11: 'Nov',
    12: 'Dec',
  };

  const newObject = [];

  for (let index = 0; index < Filter.length; index++) {
    const month = monthTable[Filter[index].month];
    const value =Number(Filter[index].value.toFixed(2));
    newObject.push({
      Month: month,
      Value: value,
    });
  }

  return newObject;
};

export const yieldPerMonth = (Filter) => {
  const monthTable = {
    1: 'Jan',
    2: 'Feb',
    3: 'Mar',
    4: 'Apr',
    5: 'May',
    6: 'Jun',
    7: 'Jul',
    8: 'Aug',
    9: 'Sep',
    10: 'Oct',
    11: 'Nov',
    12: 'Dec',
  };
  const newObject = [];
  for (let index = 0; index < Filter.length; index++ ) {
    if(index + 1 < Filter.length) {
      const month = monthTable[Filter[index + 1].month];
      const yeld = Number((Filter[index + 1].value / Filter[index].value - 1).toFixed(2));
      newObject.push({
        Month: month,
        Yeld: yeld,
      });
    }
  }
  return newObject;
}