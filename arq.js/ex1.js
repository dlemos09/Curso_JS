let varA = 'A'
let varB = 'B'
let varC = 'C'

const varATempo =  varA;

varA = varB;
varB = varC;
varC = varATempo;

console.log(varA, varB, varC)