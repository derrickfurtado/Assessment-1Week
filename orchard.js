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

// used fujiAcres.length instead of integer 7 because there is a good chance that all crops are harvested at the same time, therefore, growth to array.lenth from future harvests will reflect the same across all arrays. This will make this code durable as harvest data increases.

for (let i = 0; i < fujiAcres.length; i++){                     
    totalAcres += fujiAcres[i] + galaAcres[i] + pinkAcres[i]    // this declaration of totalAcres is adding each index of all 3 arrays and compounding the loop
}
console.log(`Total harvest this week (in acres): `, totalAcres)



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

let averageDailyAcres = totalAcres / 7                      // simply calculating averageDailyAcres per day by dividing by 7 days of the week

console.log("Average daily harvest this week (in acres):", averageDailyAcres)



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
    acresLeft -= averageDailyAcres          // subtracting the acreage productivity per day from unharvested land until = 0
    days += 1                               // for every day of harvest production, this will count days passed.
}

console.log("Projected time to harvest remaining crop (in days): ", days)





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
    fujiTons.push(fujiAcres[n] * 6.5)       // next 3 lines of code are taking each total acreage for each crop harvested and converting to output in tonnage
    galaTons.push(galaAcres[n] * 6.5)
    pinkTons.push(pinkAcres[n] * 6.5)
} 
    

console.log("Fuji Apples harvest each day (in tons): ",fujiTons)
console.log("Gala Apples harvest each day (in tons): ", galaTons)
console.log("Pink Apples harvest each day (in tons): ", pinkTons)






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
    fujiPounds += fujiTons[n] * 2000        // next 3 lines of code are taking output in tonnage and converting to output in lbs.
    galaPounds += galaTons[n] * 2000
    pinkPounds += pinkTons[n] * 2000
}

console.log("Fuji Apple harvest this week (in lbs): ", fujiPounds)
console.log("Gala Apple harvest this week (in lbs): ", galaPounds)
console.log("Pink Apple harvest this week (in lbs): ", pinkPounds)


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

let fujiProfit = fujiPounds * fujiPrice //as profits-per-unit (lbs), next 3 lies of code convert total-lbs-harvested and price-per-pound into profits-per-crop.
let galaProfit = galaPounds * galaPrice
let pinkProfit = pinkPounds * pinkPrice



console.log("Fuji Apple profits to-date: ", fujiProfit) 
console.log("Gala Apple profits to-date: ", galaProfit)
console.log("Pink Apple profits to-date: ", pinkProfit)




console.log("------------------")

// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE

let totalProfit = fujiProfit + galaProfit + pinkProfit  // sum of all profits for each crop type
console.log("Total weekly profits: ", totalProfit)

console.log("------------------")
