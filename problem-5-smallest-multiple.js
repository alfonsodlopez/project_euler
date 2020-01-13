/* 
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?

smallestMult(5) should return 60.
Passed
smallestMult(7) should return 420.
Passed
smallestMult(10) should return 2520.
Passed
smallestMult(13) should return 360360.
Passed
smallestMult(20) should return 232792560.
Passed
*/


function smallestMult(n) {
    //Get max possible solution
    let product = 1
    for (let i = 1; i <= n; i++) {
        product *= i;
    }
    let smallest = 1;
    //Check increments of n
    for (let k = 0; k < product; k = k + n) {
        for (let j = n; j > 0; j--) {
            //console.log(j)
            if ((k + n) % j !== 0) {
                break
            }
            else if ((k + n) % j === 0 && j === 1) {
                //console.log(`k+n = ${k+n}`)
                return k + n;
            }
        }
    }
    return smallest;
}

smallestMult(20);
