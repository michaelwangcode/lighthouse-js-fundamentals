// This function merges two sorted arrays by iterating through both and comparing values
function merge(array1, array2)
{
  // Create the indexes of the two arrays and the merged array
  let index1 = 0;
  let index2 = 0;
  let mergedArray = [];


  // This while loop compares the values of array 1 and 2
  // The smaller value gets added to the merged array
  // (If either array has a length of 0, this loop will not be executed)
  while(index1 < array1.length && index2 < array2.length)
  {
    // If the number in array 1 is bigger,
    if (array1[index1] <= array2[index2])
    {
      // Add it to the merged array
      mergedArray.push(array1[index1]);

      // Increment the index of array 1
      index1++;
    }
    // If the number in array 2 is even or bigger,
    else
    {
      // Add it to the merged array
      mergedArray.push(array2[index2]);

      // Increment the index of array 2
      index2++;
    }
  }


  // While the first array still has numbers remaining,
  while (index1 < array1.length)
  {
    // Add the number to the merged array
    mergedArray.push(array1[index1])

    // Increment the index of array 1
    index1++;
  }


  // While the second array still has numbers remaining,
  while (index2 < array2.length)
  {
    // Add the number to the merged array
    mergedArray.push(array2[index2])

    // Increment the index of array 2
    index2++;
  }
  

  // Return the merged array
  return mergedArray;
}



console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);
