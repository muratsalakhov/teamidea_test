function factorial(N) {
    if (N == 1) {
        return 1;
    } else {
        return factorial(N-1)*N;
    }
}

function zeroCount(N) {
    let str = "" + factorial(N);
    let result = str.match(/[0]*$/g);
    if (result[0] == null) {
        console.log(0);
        return 0;
    } else {
        console.log(result[0].length);
        return result[0].length;
    }
}

zeroCount(10);