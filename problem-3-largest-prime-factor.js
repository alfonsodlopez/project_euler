/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the given number?

largestPrimeFactor(2) should return 2.
Passed
largestPrimeFactor(3) should return 3.
Passed
largestPrimeFactor(5) should return 5.
Passed
largestPrimeFactor(7) should return 7.
Passed
largestPrimeFactor(13195) should return 29.
Passed
largestPrimeFactor(600851475143) should return 6857.
Passed
*/

function largestPrimeFactor(number) {
    if (number < 2) return "None";
    if (number === 2) return 2;
    if (number === 3) return 3;
    let num = parseInt(Math.ceil(Math.sqrt(number / 2)));
    for (num; num >= 2; num--) {
        if (number % num === 0) {
            console.log(`Num is ` + num)
            for (let i = 2; i <= num; i++) {
                if (i === num) {
                    return num;
                }
                else if (num % i === 0) {
                    break;
                }
                console.log(`i is ${i} num is ${num}`)
            }
        }
    }
    return number;
}

largestPrimeFactor(600851475143);
