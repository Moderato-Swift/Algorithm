
let cache = Array.from({ length: 1001 }, () => 0);

const solution = (n) => {
    cache[1] = 1;
    cache[2] = 3;
    for (let i = 3; i <= n; i++) {
        cache[i] = (cache[i - 1] + 2 * cache[i - 2]) % 796796;
    }
    return cache[n];
}

console.log(solution(3));