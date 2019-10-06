module.exports = function zeros(expression) {

  const zeros = {
    numTwo: 0,
    numFive: 0
  };

  const countZeros = (elenNum, startPosition, step) => {
    for (let i = startPosition; i <= elenNum; i += step) {
      let j = i;
      if (i % 2 === 0) {
        zeros.numTwo += 1;
      } 
      if (i % 5 === 0) {
        zeros.numFive += 1;
        while(j > 5) {
          j = j / 5;
          if (j % 5 === 0) {
            zeros.numFive += 1;
          }
        }
      }
    }
  }

  let arrExpression;
  let elenNum;
  let startPosition;
  let step;

  if (expression.includes('*')) {
    arrExpression = expression.split('*');
  } else {
    arrExpression = [expression];
  }

  arrExpression.forEach((elem) => {
    elenNum = parseInt(elem);
    if (elem.slice(-2) === '!!') {
      step = 2;
      startPosition = (elenNum % 2) ? 1 : 2;
    } else {
      step = 1;
      startPosition = 1;
    }
    countZeros(elenNum, startPosition, step);
  });

  return Math.min(zeros.numTwo, zeros.numFive);

}

