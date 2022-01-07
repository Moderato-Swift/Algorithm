const solution = (n, m, arr) => {
    let answer = 0;
    let queue = [];
    let dx = [0, 0, -1, 1];
    let dy = [-1, 1, 0, 0];

    const BFS = (x, y) => {
        queue.push([x, y]);
        while (queue.length > 0) {
            let check = queue.shift();
            for (let i = 0; i < dx.length; i++) {
                let nx = check[0] + dx[i];
                let ny = check[1] + dy[i];
                if (nx >= 0 && ny >= 0 && nx < n && ny < m && arr[nx][ny] === 1) {
                    arr[nx][ny] = arr[check[0]][check[1]] + 1;
                    queue.push([nx, ny]);
                }
            }
        }
    }
    BFS(0, 0);

    return arr[n - 1][m - 1];
}

let arr = [
    [1, 0, 1, 0, 1, 0],
    [1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1]
];

console.log(solution(5, 6, arr));