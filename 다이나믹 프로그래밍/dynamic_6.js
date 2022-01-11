const num = 4;
let cache = Array.from({ length: num + 1 }, () => 10001);
const solution = (n, arr) => {
    cache[0] = 0;
    arr.forEach((v) => {
        for (let i = v; i <= n; i++) {
            if (cache[i - v] !== 10001) {
                cache[i] = Math.min(cache[i], cache[i - v] + 1);
            }
        }
    });
    (cache[n] === 10001) ? console.log(-1) : console.log(cache[n]);
}

let arr = [3, 5, 6];
solution(num, arr);