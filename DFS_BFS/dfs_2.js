const solution = (n, m, arr) => {
    let answer = 0;
    let dx = [0, 0, -1, 1];
    let dy = [-1, 1, 0, 0]

    const DFS = (x, y) => {
        arr[x][y] = 1;
        for (let i = 0; i < dx.length; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];
            if (nx >= 0 && ny >= 0 && nx < n && ny < m && arr[nx][ny] === 0) {
                arr[nx][ny] = 1;
                DFS(nx, ny);
            }
        }
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === 0) {
                DFS(i, j);
                answer++;
            }
        }
    }

    return answer;
}

let arr = [
    [0, 0, 1, 1, 0],
    [0, 0, 0, 1, 1],
    [1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0]
];

console.log(solution(4, 5, arr));