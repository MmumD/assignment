function findMinElement(arr) {
    if (arr.length === 0) {
        return undefined;
    }
    const minElement = arr.reduce((min, current) => (current < min ? current : min), arr[0]);

    return minElement;
}

const numbers = [5, 2, 8, 1, 9, 4];
const minNumber = findMinElement(numbers);
console.log(`The minimum element in the array is: ${minNumber}`);