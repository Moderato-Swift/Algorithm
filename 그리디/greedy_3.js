const solution = (n, m, arr) => {
    let check = [];
    arr.forEach((a) => {
        check.push(Math.min(...a));
    });
    let result = Math.max(...check);
    return result;
}

let arr = [[3, 1, 2], [4, 1, 4], [2, 2, 2]];
console.log(solution(3, 3, arr));