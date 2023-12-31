// Using iteration, write a function fibs which takes a number 
// and returns an array containing that many numbers from the Fibonacci sequence. 
// Using an example input of 8, this function should return the array [0, 1, 1, 2, 3, 5, 8, 13].

// Now write another function recursionFibonacci which solves the same problem recursively.

function iterationFibonacci(num) {
  if (num<=0) return [];
  if (num===1) return [0];
  if (num===2) return [0, 1];

  let result = [0, 1];
  for (let i=1; i<num-1; i++) {
    result.push(result[i] + result[i-1])
  };

  return result;
}   

function recursionFibonacci(num) {
  if (num<=0) return [];
  if (num===1) return [0];
  if (num===2) return [0, 1]; 

  let prevIdx = num-3;
  let currentIdx = num-2;
  let result = recursionFibonacci(num-1);
  let nextFibNumber = result[currentIdx] + result[prevIdx];
  result.push(nextFibNumber);
  return result;
}
