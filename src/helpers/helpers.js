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
