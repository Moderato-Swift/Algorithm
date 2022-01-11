const solution = (arr, arr2) => {
    const n = arr.length;
    const m = arr2.length;
    let result = [];

    arr.sort((a, b) => a - b);
    for (let i = 0; i < m; i++) {
        let start = 0, end = n - 1;
        let mid = 0;
        let check = false;
        while (start <= end) {
            mid = Math.floor((start + end) / 2);
            if (arr[mid] === arr2[i]) {
                check = !check;
                break;
            } else if (arr[mid] > arr2[i]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        (check) ? result.push('YES') : result.push('NO');
    }
    return result.join(' ');
}

let arr = [8, 3, 7, 9, 2];
let arr2 = [5, 7, 9];
console.log(solution(arr, arr2))

