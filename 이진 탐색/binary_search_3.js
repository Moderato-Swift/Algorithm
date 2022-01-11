const solution = (n, arr) => {
    let check_arr = [...arr];
    let start = 0, end = Math.max(...arr);
    let mid = 0;
    let result = 0;

    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        check_arr = arr.map((v) => {
            if (v - mid > 0) {
                return v - mid;
            }
            return 0;
        });
        let check = check_arr.reduce((a, b) => a + b);
        if (check === n) {
            result = mid;
            break;
        } else if (check > n) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return result;
}

let arr = [19, 15, 10, 17];
console.log(solution(6, arr));