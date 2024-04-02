// JS Practice Question 1

    // const userInput = prompt("Enter a number: ")

    // const num = Number(userInput)

    // if (num % 2 === 0) {
    //     alert("Even")
    // } 
    // else {
    //     alert("Odd")
    // }

// JS Practice Question 2

    //Prompt user to enter a number 3 times
    // const userInput1 = prompt("enter a number: ")
    // const num1 = Number(userInput1)

    // const userInput2 = prompt("enter a number: ")
    // const num2 = Number(userInput2)

    // const userInput3 = prompt("enter a number: ")
    // const num3 = Number(userInput3)

    //Perform Logic for determining the largest number and alert

    // if (num1 > num2 && num1 > num3) {
    //     alert(`the largest number was: ${num1}`)
    // } else if (
    //     num2 > num1 && num2 > num3) {
    //     alert(`the largest number was: ${num2}`)
    // } else {
    //     alert(`the largest number was: ${num3}`)
    // }

    // const num1 = Number(prompt("enter a number: "))
    // const num2 = Number(prompt("enter a number: "))
    // const num3 = Number(prompt("enter a number: "))

    // const largest = Math.max(num1, num2, num3)
    // alert("the largest number is: " + largest)

// JS Practice Question 3

// let min = -10
// let max = -10

// function minToMax(min, max) {
//     let arr = []
//     if (max < min) {
//         return arr
//     } else if (min === max) {
//         return min
//     } else {
//         for (i = min; i <= max; i++) {
//             arr.push(i)
//         }
//     }
//     return arr
// }
// console.log(minToMax(min, max));

// const min = 8;
// const max =8;

// const arr = [];

// for (let i = min; i <= max; i++) {
//     arr.push(i)
// }

// console.log(arr);

// JS Practice Question 4

// const string = "coursecareers";
// const delimiter = "|";
// const spacing = 1;
// let arr = []

// for (let i = 0; i < string.length; i++) {
//     arr.push(string[i])
//     if ((i + 1) % spacing === 0) {
//         arr.push(delimiter)
//         // console.log(arr);
//     }
// }

const string = "coursecareers";
const delimiter = "|";
const spacing = 1;
let newString = ""

for (let i = 0; i < string.length; i++) {
    
    if (i % spacing === 0 && i !== 0) {
        newString += delimiter
    }
    const char = string.charAt(i)
    newString += char
}
console.log(newString);
