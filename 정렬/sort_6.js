const solution = (arr) => {
    arr.sort((a, b) => b - a);
    return arr;
}

let arr = [15, 27, 12];
console.log(solution(arr));