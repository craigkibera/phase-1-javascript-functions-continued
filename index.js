// code your solution here
function saturdayFun (activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}
console.log (saturdayFun())

function mondayWork ( activity="go to the office"){
    return `This Monday, I will ${activity}.`
}
console.log(mondayWork())

function wrapAdjective (symbol= "*"){
    return function(value="special") {
        return `You are ${symbol}${value}${symbol}!`
    }
}
console.log (wrapAdjective("#")("good"))