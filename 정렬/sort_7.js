const solution = (arr) => {
    arr.sort((a, b) => a[1] - b[1]);
    return arr.map((a) => a[0]);
}

let arr = [['홍길동', 95], ['이순신', 77]];
console.log(solution(arr));