// Returns an array of numbers given a start, end and step
function range(start, end, step)
{
  // If any of the parameters are invalid, return an empty array
  if (start === undefined || end === undefined || step === undefined)
  {
    return [];
  }
  else if (start > end || step <= 0)
  {
    return [];
  }

  // Create a numbers array
  let numbers = [];

  // Iterate from start to end and append the number to the array
  for(let i = start; i <= end; i = i + step)
  {
    numbers.push(i);
  }

  return numbers;
}


console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
