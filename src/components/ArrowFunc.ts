

var getRegularValue = function() {
  return 10;
}

console.log(getRegularValue());

// convert to arrow func
//

const getArrowValue1 = () => 10;

const getArrowValue2 = () => {
  return 10;
}

console.log(getArrowValue1());

console.log(typeof getArrowValue1); // will output "function"

console.log(getArrowValue2());

const getArrowValue3 = (m) => {
  return 10*m;
}

console.log(getArrowValue3(15));


const getArrowValue4 = (m, bonus) => {
  return 10*m + bonus;
}

console.log(getArrowValue4(15,10));

export {};
