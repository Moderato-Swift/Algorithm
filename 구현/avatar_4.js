const solution = (n, arr, arr2) => {
    // 북동남서
    let check_arr = Array.from({ length: n }, () => Array(n).fill(0));
    let move = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    const rotateLeft = () => {
        arr2[2]--;
        if (arr2[2] === -1) {
            arr2[2] = 3;
        }
    }
    let count = 1;
    let check_turn = 0;
    while (true) {
        rotateLeft();
        let nx = arr2[0] + move[arr2[2]][0];
        let ny = arr2[1] + move[arr2[2]][1];
        if (check_arr[nx][ny] === 0 && arr[nx][ny] === 0) {
            check_arr[nx][ny] = 1;
            arr2[0] = nx;
            arr2[1] = ny;
            count++;
            check_turn = 0;
            continue;
        } else {
            check_turn++;
        }

        if (check_turn === 4) {
            nx = arr2[0] - move[arr2[2]][0];
            ny = arr2[1] - move[arr2[2]][1];
            if (check_arr[nx][ny] === 0) {
                arr2[0] = nx;
                arr2[1] = ny;
            } else {
                break;
            }
            check_turn = 0;
        }
    }

    return count;
}


let arr2 = [1, 1, 0];
let arr = [
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 1, 0, 1],
    [1, 1, 1, 1]
];
console.log(solution(4, arr, arr2));