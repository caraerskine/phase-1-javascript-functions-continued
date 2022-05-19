// code your solution here

// function saturdayFun(){
// return 'This Saturday I want to ...!'
// }

function saturdayFun(activity = 'roller-skate'){
return (`This Saturday, I want to ${activity}!`);}
 
console.log(saturdayFun());

console.log(saturdayFun('dance')); 

function mondayWork(activity = 'go to the office'){
    return (`This Monday, I will ${activity}.`);}
//    for the one below 
// Implement a function called wrapAdjective:

// It should return a function. This "inner" function should:
// take a single parameter that should default to "special". Name it however you wish.
// return a String of the form "You are ...!" where ... should be the adjective this function received wrapped in visual flair.
// It should take as parameter a String that will be used to create visual flair.
// You may call the parameter whatever you like, 
// but its default value should be "*".
// 
//Call example: const encouragingPromptFunction = wrapAdjective("!!!")
function wrapAdjective(compliment = "*"){
    return function (greeting = "special") {
    return (`You are ${compliment}${greeting}${compliment}!`)
} }
    // const innerFunction = function (popEye = '*'){
    // return (`You are ${compliment}!`);}
    



    console.log(wrapAdjective());

    // function wrapAdjective(compliment = "special")

// function outer(greeting, msg = "It's a fine day to learn") {
// 2
//   const innerFunction = function (name, lang = "Python") {
//     // 3
//     return `${greeting}, ${name}! ${msg} ${lang}`; // 4
//   };
//   return innerFunction("student", "JavaScript"); // 5
// }
// outer("Hello"); // 1
//=> "Hello, student! It's a fine day to learn JavaScript"






// function outer( )



//function(name, lang="Python") { 
    // --The "inner" function--
//return `Hello, ${name}! It's a fine day to learn ${lang}`
// }