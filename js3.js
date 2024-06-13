function getSumFunction(x) {
    return function(y) {
        return x + y
    }
};

const sumFunction = getSumFunction(23);
const sum = sumFunction(5)

console.log(sum);