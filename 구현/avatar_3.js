const solution = (str) => {
    let one = str.charCodeAt(0) - 'a'.charCodeAt(0);
    let two = Number(str[1]) - 1;

    let movement = [[-2, 1], [-2, -1], [2, 1], [2, -1], [1, -2], [1, 2], [-1, -2], [-1, 2]];

    let count = 0;
    movement.forEach((move) => {
        let cx = one + move[0];
        let cy = two + move[1];
        if (cx >= 0 && cy >= 0 && cx <= 7 && cy <= 7) {
            count++;
        }
    });

    return count;
}

console.log(solution('c2'));