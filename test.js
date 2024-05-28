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
// let max = 10

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

// const string = "coursecareers";
// const delimiter = "|";
// const spacing = 1;
// let newString = ""

// for (let i = 0; i < string.length; i++) {
    
//     if (i % spacing === 0 && i !== 0) {
//         newString += delimiter
//     }
//     const char = string.charAt(i)
//     newString += char
// }
// console.log(newString);



// JS Practice Question 5

// const numStr = "12|13|-4|5";
// const numStr2 = "-5|-4|-1|-1";

// function mathIsFun(numberString) {
//     let arrStr = numberString.split("|")
//     let arrNum = []

//     for (let i = 0; i < arrStr.length; i++) {
//         arrNum.push(parseInt(arrStr[i]))
//     }
//     //get max from array
//     let max = Math.max(...arrNum)
//     //need index to handle duplicate max number values
//     let maxIndex = arrNum.indexOf(max)

//     let filteredArr = arrNum.filter((num, index) => index !== maxIndex) 
//     let max2 = Math.max(...filteredArr)

//     let result = max + max2
//     return result
// }

// console.log(mathIsFun(numStr2));


// function mathIsFun(numberString) {
    
//     const numbers = numberString.split("|")
//     let maxSum = undefined;

//     for (let i = 0; i < numbers.length; i++) {
//         console.log("i:" + i, "value: " + numbers[i]);
//         for (let j = i + 1; j < numbers.length; j++) {
//             console.log("j: " + j, "value: " + numbers[j]);
//             const number1 = numbers[i];
//             console.log("number1: " + number1);
//             const number2 = numbers[j];
//             console.log("number2: " + number2);
//             // convert to number
//             const sum = Number(number1) + Number(number2)
//             if (maxSum === undefined || sum > maxSum) {
//                 maxSum = sum
//                 console.log("maxSum: " + maxSum);
//             }
//         }
//     }
//     return maxSum
// }
// const result = mathIsFun("5|4|12|13")
// console.log(result);

function mathIsFun(numberString) {
    const splitStr = numberString.split("|")
    let maxSum = undefined

    for (let i = 0; i < splitStr.length; i++) {
        let number1 = splitStr[i]
        for (let j = i + 1; j < splitStr.length; j++) {
            let number2 = splitStr[j]
            let sum = Number(number1) + Number(number2)
            if (maxSum === undefined) {
                maxSum = sum
            }
            if (sum > maxSum) {
                maxSum = sum
            }
        }
    }
    return maxSum
}
// console.log(mathIsFun("-2|-4|-1|-1"));




// JS Practice Question 6

function friends(people) {
    if (people.length == 0)
        return undefined

    // create newPeople object from people array
    const newPeople = {}
    for (const person of people) {
        newPeople[person.name] = {friends: person.friends, loyalFriends: 0}
    }
    // console.log(newPeople);
    //loop through people array
    for (const person of people) {
        //in the person object, loop through friends array
        for (const friend of person.friends) {
            // check if the current person's name 
            // is included in the list of friends of the current friend.
            const loyalFriend = newPeople[friend].friends.includes(person.name)
            //set boolean value from this check
            if (loyalFriend) {
                //update loyalfriends value
                newPeople[person.name].loyalFriends += 1
            }
        }
    }
            
    //set person with most friends
    let personWithMostFriends = undefined
    //destructure key/values from newPeople object
    for (const [name, values] of Object.entries(newPeople)) {
        //update person with most friends value
        if (personWithMostFriends === undefined) {
            personWithMostFriends = name
            continue
        }
        if (values.loyalFriends > newPeople[personWithMostFriends].loyalFriends) {
            personWithMostFriends = name
        }
    }
    // return person with most friends value
    return personWithMostFriends
}

// const people = [
//     {"name": "Tim", "friends": ["John", "Sally"]},
//     {"name": "John", "friends": ["Tim", "Mike"]},
//     {"name": "Mike", "friends": ["John"]},
//     {"name": "Sally", "friends": ["Tim"]}
// ]
// console.log(friends(people));
// const result = friends(people)
// console.log(result);




