const sumAll = function(firstNumber, secondNumber) {
    if (!Number.isInteger(firstNumber) || !Number.isInteger(secondNumber)) return "ERROR";
  if (firstNumber < 0 || secondNumber < 0) return "ERROR";
  if (firstNumber > secondNumber) {
    const temp = firstNumber;
    firstNumber = secondNumber;
    secondNumber = temp;
  }

    let sum = 0;
   const start = Math.min(firstNumber, secondNumber);
   const end = Math.max(firstNumber, secondNumber);
   if (firstNumber <0 || secondNumber <0) return "Error";

   for (let i=start; i<=end; i++){
    sum+=i;
   }
   return sum;
};

// Do not edit below this line
module.exports = sumAll;
