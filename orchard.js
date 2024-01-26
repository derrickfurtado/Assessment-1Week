///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 

    n = days
    value = acres picked
    monday = 0
    tuesday = 1
    price = per pound
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE

console.log("=============")

let totalAcres = 0

for (let i = 0; i < fujiAcres.length; i++){
    totalAcres += fujiAcres[i] + galaAcres[i] + pinkAcres[i]
}
console.log(`Total acres harvested this week is: `, totalAcres)



console.log("------------------")

// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE

let averageDailyAcres = totalAcres / 7

console.log("Average acres harvested per day:", averageDailyAcres)



console.log("------------------")
// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE

while (acresLeft > 0){
    acresLeft -= averageDailyAcres
    days += 1
}

console.log("Estimated workdays required to harvest the rest of the crops: ", days)





console.log("------------------")

// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE

let fujiTons = []
let galaTons = []
let pinkTons = []


for (n = 0; n < 7; n++){
    fujiTons.push(fujiAcres[n] * 6.5)
    galaTons.push(galaAcres[n] * 6.5)
    pinkTons.push(pinkAcres[n] * 6.5)
} 
    

console.log("Tons of Fuji Apples harvested each day: ",fujiTons)
console.log("Tons of Gala Apples harvested each day: ", galaTons)
console.log("Tons of Pink Apples harvested each day: ", pinkTons)






console.log("------------------")


// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 

let fujiPounds = 0
let galaPounds = 0
let pinkPounds = 0


for (n = 0; n < 7; n++){
    fujiPounds += fujiTons[n] * 2000
    galaPounds += galaTons[n] * 2000
    pinkPounds += pinkTons[n] * 2000
}

console.log("Total Fuji Apple pounds harvested this week: ", fujiPounds)
console.log("Total Gala Apple pounds harvested this week: ", galaPounds)
console.log("Total Pink Apple pounds harvested this week: ", pinkPounds)


console.log("------------------")

// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

let fujiProfit = fujiPounds * fujiPrice
let galaProfit = galaPounds * galaPrice
let pinkProfit = pinkPounds * pinkPrice

console.log("Profits from Fuji Apple sales to-date: ", fujiProfit)
console.log("Profits from Gala Apple sales to-date: ", galaProfit)
console.log("Profits from Pink Apple sales to-date: ", pinkProfit)




console.log("------------------")

// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE

let totalProfit = fujiProfit + galaProfit + pinkProfit
console.log("Total weekly profits: ", totalProfit)

console.log("------------------")
