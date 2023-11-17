function MaxAndMin(arr) {
    if (arr.length == 0) return null;
    let min = arr[0], max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        min = Math.min(min, arr[i]);
    }
    for (let i = 1; i < arr.length; i++) {
        max = Math.max(max, arr[i]);
    }
    return {min: min, max: max};
}
const nums = [1, 2, 3, 4, 5];
let answer = MaxAndMin(nums);
console.log(`Maximun element is: ${answer.max}, Minimum element is: ${answer.min}`);