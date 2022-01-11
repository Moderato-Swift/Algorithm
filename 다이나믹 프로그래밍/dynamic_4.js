let arr = [1, 3, 1, 5]
let cache = Array.from({ length: arr.length }, () => 0);

const solution = (arr) => {
    cache[0] = arr[0];
    cache[1] = Math.max(arr[1], arr[0]);
    for (let i = 2; i < arr.length; i++) {
        cache[i] = Math.max(cache[i - 1], cache[i - 2] + arr[i]);
    }
    return cache[arr.length - 1];
}
console.log(solution(arr));