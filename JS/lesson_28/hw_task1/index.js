// function shmoment
// input: Date
// outout :  object

// algo:
// 1. shmoment include object with functions: add & subtract & result
// 2. create new Date = shmoment input date
// 3. .add
//    input: date type(yers/months/...) value
//    output: new changed Date
// 4. subtract
//    input: date type(yers/months/...) value
//    output: new changed Date
// 5. result
//    output: new changed Date

export const shmoment = (initialDate) => {
  const newDate = initialDate;

  const datesCalc = {
    add(dataType, value) {
      switch (dataType) {
        case 'years':
          newDate.setFullYear(newDate.getFullYear() + value);
          break;
        case 'months':
          newDate.setMonth(newDate.getMonth() + value);
          break;
        case 'days':
          newDate.setDay(newDate.getDay() + value);
          break;
        case 'hours':
          newDate.setHours(newDate.getHours() + value);
          break;
        case 'minutes':
          newDate.setMinutes(newDate.getMinutes() + value);
          break;
        case 'seconds':
          newDate.setSeconds(newDate.getSeconds() + value);
          break;
        case 'milliseconds':
          newDate.setMilliseconds(newDate.getMilliseconds() + value);
          break;
        default:
          return newDate;
      }
      return this;
    },
    subtract(dataType, value) {
      switch (dataType) {
        case 'years':
          newDate.setFullYear(newDate.getFullYear() - value);
          break;
        case 'months':
          newDate.setMonth(newDate.getMonth() - value);
          break;
        case 'days':
          newDate.setDay(newDate.getDay() - value);
          break;
        case 'hours':
          newDate.setHours(newDate.getHours() - value);
          break;
        case 'minutes':
          newDate.setMinutes(newDate.getMinutes() - value);
          break;
        case 'seconds':
          newDate.setSeconds(newDate.getSeconds() - value);
          break;
        case 'milliseconds':
          newDate.setMilliseconds(newDate.getMilliseconds() - value);
          break;
        default:
          return newDate;
      }
      return this;
    },
    result() {
      return newDate;
    },
  };
  return datesCalc;
};

// const res = shmoment(new Date(2020, 0, 7, 17, 17, 17))
//   .add('years', 2)
//   .subtract('minutes', 10)
//   .result();

// console.log(res);
