function merge(arr1, arr2) {
  let result =[];
  let idx1 = 0;
  let idx2 = 0;
  while(arr1[idx1] && arr2[idx2]) {
    if (arr1[idx1] < arr2[idx2]) {
      result.push(arr1[idx1]) ;
      idx1++;
    }else {
      result.push(arr2[idx2]);
      idx2++;
    };
  };

  while (arr1[idx1]) {
    result.push(arr1[idx1]);
    idx1++;
  };

  while (arr2[idx2]) {
    result.push(arr2[idx2]);
    idx2++;
  };
  
  return result;
}


function mergeSort(arr) {
  if (arr.length < 2 ) return arr;

  let middleIdx = Math.ceil(arr.length/2);
  let leftSideArr = arr.slice(0, middleIdx);
  let rightSideArr = arr.slice(middleIdx);
  
  let leftSorted = mergeSort(leftSideArr);
  let rightSorted = mergeSort(rightSideArr);
  
  let mergedSortedArr = merge(leftSorted, rightSorted);
  
  return mergedSortedArr;
}

