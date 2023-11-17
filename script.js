function findMaxMin(arr) {
    if (arr.length === 0) {
        return { max: null, min: null };
    }
    let max = arr[0];
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        } else if (arr[i] < min) {
            min = arr[i];
        }
    }
    return { max, min };
}

const numbers = [3, 7, 2, 10, 1, 8, 5];
const result = findMaxMin(numbers);
console.log("Maximum element:", result.max);
console.log("Minimum element:", result.min);