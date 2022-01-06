const solution = (n, arr) => {
    // 좌, 우, 상, 하
    let dx = [-1, 1, 0, 0];
    let dy = [0, 0, -1, 1];
    let move = [1, 1];
    arr.forEach((m) => {
        let check = -1;
        switch (m) {
            case 'L':
                check = 0;
                break;
            case 'R':
                check = 1;
                break;
            case 'U':
                check = 2;
                break;
            case 'D':
                check = 3;
                break;
            default:
                break;
        }
        let cx = move[1] + dx[check];
        let cy = move[0] + dy[check];
        if (cx >= 1 && cy >= 1 && cx <= n && cy <= n) {
            move[1] = cx;
            move[0] = cy;
        }
    });
    return move.join(' ');
}

let arr = ['R', 'R', 'R', 'U', 'D', 'D'];
console.log(solution(5, arr));