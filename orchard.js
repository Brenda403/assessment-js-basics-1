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
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1];
const galaAcres = [5, 2, 4, 3, 6, 2, 4];
const pinkAcres = [1, 5, 4, 2, 1, 5, 4];

const fujiPrice = 0.89;
const galaPrice = 0.64;
const pinkPrice = 0.55;

// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE

// set the total variable to start outside all the loops
let totalAcres = 0;
// I wrote the code below to loop through the first array and add the next index to the previous one until total is arrived and did this for each apple type and reassigned the totalAcres value in each loop
for (let i = 0; i < fujiAcres.length; i++) {
  totalAcres += fujiAcres[i];
}
for (let j = 0; j < galaAcres.length; j++) {
  totalAcres += galaAcres[j];
}
for (let h = 0; h < pinkAcres.length; h++) {
  totalAcres += pinkAcres[h];
}

//console.log(totalAcres);

// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE
// I set the average variable to equal the totalAcres variable divided by days of the week for the average daily total
let averageDailyAcres = totalAcres / 7;
//console.log(averageDailyAcres);

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

let acresLeft = 174;
let days = 0;

// CODE HERE
while (acresLeft > 0) {
  // here I wrote the code so that each time it loops acres left is reassigned to equal acres left minus the daily average
  acresLeft = acresLeft - averageDailyAcres;
  // here I added +1 to count the days each time the loop iterates
  days = days + 1;
}

//console.log(days);

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
// const fujiAcres = [2, 3, 3, 2, 2, 2, 1]; 13, 19.5, 19.5, 13, 13, 13, 6.5
// const galaAcres = [5, 2, 4, 3, 6, 2, 4];
// const pinkAcres = [1, 5, 4, 2, 1, 5, 4];

let fujiTons = [];
let galaTons = [];
let pinkTons = [];
// For this one I looped over each apple type array and multiplied each element in the array by the tons and pushed each one to the above empty arrays
for (let i = 0; i < fujiAcres.length; i++) {
  let dailyAmount = fujiAcres[i] * 6.5;
  fujiTons.push(dailyAmount);
}
for (let i = 0; i < galaAcres.length; i++) {
  let dailyAmount = galaAcres[i] * 6.5;
  galaTons.push(dailyAmount);
}
for (let i = 0; i < pinkAcres.length; i++) {
  let dailyAmount = pinkAcres[i] * 6.5;
  pinkTons.push(dailyAmount);
}

//console.log(fujiTons, galaTons, pinkTons);

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
// for the first part with the for loops I iterated to add each value to the one before in the array for each apple variety
let fujiTotalTons = 0;
for (let i = 0; i < fujiTons.length; i++) {
  fujiTotalTons += fujiTons[i];
}

let galaTotalTons = 0;
for (let i = 0; i < galaTons.length; i++) {
  galaTotalTons += galaTons[i];
}

let pinkTotalTons = 0;
for (let i = 0; i < pinkTons.length; i++) {
  pinkTotalTons += pinkTons[i];
}
// secondly, I assigned the value for each apple variety's pound to the previous variable of total tons times 2000
let fujiPounds = fujiTotalTons * 2000;
let galaPounds = galaTotalTons * 2000;
let pinkPounds = pinkTotalTons * 2000;

// console.log(fujiTotalTons, galaTotalTons, pinkTotalTons);
// console.log(fujiPounds, galaPounds, pinkPounds);

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

// const fujiPrice = 0.89;
// const galaPrice = 0.64;
// const pinkPrice = 0.55;

// CODE HERE
// to get the total profit I multiplied the total pounds by the price per pound
let fujiProfit = fujiPrice * fujiPounds;
let galaProfit = galaPrice * galaPounds;
let pinkProfit = pinkPrice * pinkPounds;

console.log(fujiProfit, galaProfit, pinkProfit);

// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE

let totalProfit = fujiProfit + galaProfit + pinkProfit;

console.log(totalProfit);
