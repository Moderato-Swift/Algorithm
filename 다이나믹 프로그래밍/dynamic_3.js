let cache = Array.from({ length: 30001 }, () => 0);

const solution = (n) => {
    for (let i = 2; i <= n; i++) {
        cache[i] = cache[i - 1] + 1;
        if (i % 2 === 0) {
            cache[i] = Math.min(cache[i], cache[Math.floor(i / 2)] + 1);
        } else if (i % 3 === 0) {
            cache[i] = Math.min(cache[i], cache[Math.floor(i / 3)] + 1);
        } else if (i % 5 === 0) {
            cache[i] = Math.min(cache[i], cache[Math.floor(i / 5)] + 1);
        }
    }

    return cache[n];
}

console.log(solution(26));