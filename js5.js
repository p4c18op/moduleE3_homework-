const js = (x, n) => {
    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}

const result = js(10, 2)
console.log(result)