const solution = (n, arr, arr2) => {
    arr.sort((a, b) => a - b);
    arr2.sort((a, b) => b - a);

    for (let i = 0; i < n; i++) {
        if (arr[i] < arr2[i]) {
            let check = arr[i];
            arr.splice(i, 1, arr2[i]);
            arr2.splice(i, 1, check);
        }
    }
    return arr.reduce((a, v) => a + v);
}

let arr = [1, 2, 5, 4, 3];
let arr2 = [5, 5, 6, 6, 5];
console.log(solution(3, arr, arr2));