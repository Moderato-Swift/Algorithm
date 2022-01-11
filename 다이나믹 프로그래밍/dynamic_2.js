const num = 50;
let cache = Array.from({ length: num + 1 }, () => 0);

const solution = (n) => {
    if (n === 2 || n === 1) {
        return 1;
    }
    if (cache[n] !== 0) {
        return cache[n];
    }
    cache[n] = solution(n - 1) + solution(n - 2);
    return cache[n];
}

console.log(solution(num));