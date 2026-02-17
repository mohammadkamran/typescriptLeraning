/*
array = [88,33,11,66,44]

order = [11,33,44,66,88]
*/

class ArraySorter {
    sortAscending(arr1: number[]): number[] {
        // return a new sorted array without mutating the original
        return [...arr1].sort((a, b) => a - b);
    }
}

const arr1: number[] = [88, 33, 11, 66, 44];
const sorter = new ArraySorter();
const sortedArray = sorter.sortAscending(arr1);
console.log(sortedArray);