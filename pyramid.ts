/**
 * Prints an upper pyramid pattern using numbers.
 * Each row is centered by calculating the necessary leading spaces.
 *
 * @param rows The total number of rows for the pyramid.
 */
function printNumberPyramid(rows: number): void {
  // Loop through each row of the pyramid from top to bottom.
  for (let i = 1; i <= rows; i++) {
    let output = '';

    // 1. Add leading spaces for alignment.
    // A geometrically correct pyramid requires an equal amount of space on both sides.
    // The number of leading spaces decreases for each subsequent row.
    const leadingSpaces = ' '.repeat(rows - i);
    output += leadingSpaces;

    // 2. Build the string of numbers for the current row.
    // Row 'i' contains numbers from 1 up to (2*i - 1).
    const numbers: number[] = [];
    for (let k = 1; k <= 2 * i - 1; k++) {
      numbers.push(k);
    }
    output += numbers.join(' ');

    // 3. Print the complete row to the console.
    console.log(output);
  }
}

// --- Main Execution ---
const numberOfRows = 5;
printNumberPyramid(numberOfRows);