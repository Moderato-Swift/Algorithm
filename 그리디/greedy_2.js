const solution = (n, m, k, arr) => {
    arr.sort((a, b) => b - a);
    let first = arr[0];
    let second = arr[1];

    let result = 0;

    let count = Math.floor(m / k) * k;
    result += count * first;
    result += (m - count) * second;

    return result;
}

let arr = [2, 4, 5, 4, 6];
console.log(solution(5, 8, 3, arr));