function inchToFeet(inch) {
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction)
    const inchRemaining = inch % 12;
    // console.log(feetNumber+' '+inchRemaining)
    return feetNumber + ' ft ' + inchRemaining + ' inch ';
}
// inchToFeet(75)
const shuvoHeight = inchToFeet(75)
console.log(shuvoHeight)