/* write a function to return a string with missing numbers in given format 
if input is [0,1,2,50,52,75] and sorted for a total number of items 99, the output should be "3-49,51,52-74,76-99" */

let findMissingNumberString = (inputArr, maxListCount) => {
  inputArr.push(maxListCount);
  let inputArrIndex = 0;
  let result = '';

  const getRangeString = (startVal, endVal) => {
    let range = '';
    if (startVal + 1 == endVal - 1) {
      range += startVal + 1;
    } else {
      range += startVal + 1 + '-'(endVal - 1);
    }
    return range;
  };

  for (let i = 0; i < inputArr.length; i++) {
    let startVal = inputArr[i];
    let endVal = inputArr[i + 1];
    console.log(i);
    if (endVal - startVal !== 1) {
      let range = getRangeString(startVal, endVal);
      console.log(range);
    }
  }
  return result;
};

console.log('test', findMissingNumberString([0, 1, 2, 50, 52, 75, 100], 100));
