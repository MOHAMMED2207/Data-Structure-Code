// Big O Notation: O(n) - Constant Time Complexity
function searchElement(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Return the index if the element is found
    }
  }
  return -1; // Return -1 if the element is not found
}
// Example usage:
const numbers = [10, 20, 30, 40, 50];
const target = 30;
const result = searchElement(numbers, target);
console.log(result); // Output: 2 (index of the target element)

//--------------------------------------------------------------------------------

// Note: The following binary search function assumes that the input array is sorted.
// Big O Notation: O(log n) - Logarithmic Time Complexity
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid; // Return the index if the element is found
    } else if (arr[mid] < target) {
      left = mid + 1; // Search in the right half
    } else {
      right = mid - 1; // Search in the left half
    }
  }
  return -1; // Return -1 if the element is not found
}
// Example usage:
const sortedNumbers = [10, 20, 30, 40, 50];
const targetValue = 40;
const searchResult = binarySearch(sortedNumbers, targetValue);
console.log(searchResult); // Output: 3 (index of the target element)

//--------------------------------------------------------------------------------

// Note: The following merge sort function sorts the input array.
// Big O Notation: O(n log n ) - Linearithmic Time Complexity
// Merge Sort Algorithm
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr; // Base case: arrays with 0 or 1 element are already sorted
  }

  // Split the array into halves and merge sort each half
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid); // Left half
  const right = arr.slice(mid); // Right half
  return merge(mergeSort(left), mergeSort(right)); // Merge the sorted halves
}

function merge(left, right) {
  // Merge two sorted arrays
  const result = [];
  let i = 0;
  let j = 0;
  // Compare elements from both arrays and merge them in sorted order
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}
// Example usage:
const unsortedArray = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray); // Output: [3, 9, 10, 27, 38, 43, 82]

//--------------------------------------------------------------------------------

// Big O Notation: O(n^2) - Quadratic Time Complexity
// Bubble Sort Algorithm
// This function sorts an array using the bubble sort algorithm.
function bubbleSort(arr) {
  const n = arr.length; //  n=6
  for (let i = 0; i < n - 1; i++) {
    // [i= 0 j=0,1,2,3,4]
    // [i=1 j=0,1,2,3]
    // [i=2 j=0,1,2]
    // [i=3 j=0,1]
    // [i=4 j=0]
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap arr[j] and arr[j + 1]
        // Dstructuring assignment to swap values
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
// Example usage:
const arrayToSort = [5, 3, 4, 1];
const sortedResult = bubbleSort(arrayToSort);
console.log(sortedResult); // Output: [1, 3, 4, 5]

//--------------------------------------------------------------------------------

// Big O Notation: O(2^n) - Exponential Time Complexity
// Fibonacci Sequence using Recursion
function fibonacci(n) {
  if (n <= 1) {
    return n; // Base case: return n if it's 0 or 1
  }
  return fibonacci(n - 1) + fibonacci(n - 2); // Recursive case
}
// Example usage:
const fibIndex = 6;
const fibValue = fibonacci(fibIndex);
console.log(fibValue); // Output: 8 (the 6th Fibonacci number)

