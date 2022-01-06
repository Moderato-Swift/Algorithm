const solution = (n, m) => {
    let count = 0;
    while (n > 1) {
        if (n % m !== 0) {
            count += 1;
            n -= 1;
        } else {
            count += 1;
            n = n / m;
        }
    }
    return count;
}

console.log(solution(17, 4));