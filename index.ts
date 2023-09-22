/*Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array*/




let car:string="subaru"
console.log(car=="subaru");//true
console.log(car!=="subaru");//false
console.log(car=="Honda");//false
console.log(car!=="Honda");//true
console.log(car=="Subaru");//false
console.log(car!=="Toyota");//false
console.log(car==="subaru");//true
let cars:string[]=["subaru","honda","toyota","suzuki"]//array
console.log(cars.includes("hyundai"));//false
console.log(cars.includes("suzuki"));//true

