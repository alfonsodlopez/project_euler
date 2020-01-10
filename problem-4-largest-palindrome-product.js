/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two n-digit numbers.

largestPalindromeProduct(2) should return 9009.
Passed
largestPalindromeProduct(3) should return 906609.
Passed

*/

function largestPalindromeProduct(n) {
    //Check input
    if (n < 1 && n.isInteger) return "Please enter an integer greater than 0";
    //Single character strings are palindromes
    if (n == 1) return 9;
    //Set min and max
    const nines = ("9".repeat(n) / 10)
    const num = parseInt(nines * (10))
    const min = 10 ** (n - 1);
    //Initialize max integer
    let max = 1
    //Check all products if palindrome
    for (let i = num; i > min; i--) {
        for (let j = num; j > min; j--) {
            let palindrome = i * j;
            let fwd = palindrome.toString();
            let rvrs = fwd.split("").reverse().join("")
            //If palindrome, check if greater than previous value
            if (fwd === rvrs && palindrome > max) {
                max = palindrome
            }
        }
    }
    return max;
}

largestPalindromeProduct(3);
