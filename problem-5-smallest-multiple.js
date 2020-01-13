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
