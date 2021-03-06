/*Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
By considering the terms in the Fibonacci sequence that do not exceed the nth term, find the sum of the even-valued terms.*/

function fiboEvenSum(n) {
    const result = [];
    const evenSum = [];
    let sum = 0;
    //Initializing the first non-zeros of fibonacci
    result.push(1);
    result.push(1);
    //Run fibonacci sequence and save even sums
    for (let i = 2; i <= n; i++) {
        sum = result[i - 1] + result[i - 2];
        result.push(sum);
        if (sum % 2 == 0) {
            evenSum.push(sum);
        }
    }
    //Sum array of even values.
    return evenSum.reduce((a, b) => a + b);
}

fiboEvenSum(23);