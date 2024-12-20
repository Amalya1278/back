const {reverse,capitalize,truncate}=require('./stringUtils')
const {add, subtract, multiply, divide }=require('./mathOperations')
const {unique,flatten,chunk}=require('./arrayUtils')
const { formatDate, isWeekend, daysBetween } = require('./dataUtlis')


const date = new Date('2024-12-07')
const result = isWeekend(date)
if (result !=true) {
    console.log("something gone wrong")
} else {
    console.log("correct")
}
const date4 = new Date('2024-12-06')
const result5 = isWeekend(date4)
if (result5 !=true) {
    console.log("something gone wrong")
} else {
    console.log("correct")
}


const date1 = new Date('2023-12-07')
const date2 = new Date('2024-10-01')
console.log(daysBetween(date1,date2))

console.log(formatDate('2024-10-08', 'MM-YYYY-DD'))
