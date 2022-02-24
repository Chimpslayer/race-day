let raceNumber = Math.floor(Math.random() * 1000);
var earlyRegister = Boolean(true);
var age = 17;

if (age >= 18 && earlyRegister === true) {
    console.log(`Your race number is ${raceNumber + 1000}.`)
}
if (age < 18 || earlyRegister ===false) {
    console.log(`Your race number is ${raceNumber}.`)
}
if ( age >= 18 && earlyRegister === true) {
    console.log(`Race number ${raceNumber + 1000} will begin racing at 9:30 am.`)
}
else if ( age >= 18 && earlyRegister === false) {
    console.log(`Race number ${raceNumber} will begin racing at 11:00 am.`)
}
if (age < 18) {
    console.log(`Youth number ${raceNumber} will run at 12:30 pm.`)
}
