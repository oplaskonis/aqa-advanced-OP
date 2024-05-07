const log = console.log;

//function declaration
function calcSquare1 (width, height) {
    const square = width*height;
    return square;
 }
log (calcSquare1(10,5))

//function expression
const calcSquare2 = function (width, height) {
    const square = width*height;
    return square;
}
log (calcSquare2(15,5))

//arrow function
const calcSquare3=(width, height)=>{
    const square = height*width;
    return square;
}
log (calcSquare3(20,5))