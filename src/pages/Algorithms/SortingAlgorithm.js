export function getMergeSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  return animations;
}

function mergeSortHelper(
  mainArray,
  startIdx,
  endIdx,
  auxiliaryArray,
  animations,
) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(
  mainArray,
  startIdx,
  middleIdx,
  endIdx,
  auxiliaryArray,
  animations,
) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  while (i <= middleIdx && j <= endIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i, j]);
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  while (i <= middleIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, i]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i, i]);
    // We overwrite the value at index k in the original array with the
    // value at index i in the auxiliary array.
    animations.push([k, auxiliaryArray[i]]);
    mainArray[k++] = auxiliaryArray[i++];
  }
  while (j <= endIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([j, j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([j, j]);
    // We overwrite the value at index k in the original array with the
    // value at index j in the auxiliary array.
    animations.push([k, auxiliaryArray[j]]);
    mainArray[k++] = auxiliaryArray[j++];
  }
}



// export function getQuickSortAnimations(array) {
//   const animations = [];
//   if (array.length <= 1) return animations;
//   quickSortHelper(array, 0, array.length - 1, animations);
//   return animations;
// }

export function getQuickSortAnimations(array, startIdx, endIdx, animations) {
  if (startIdx >= endIdx) return;
  const pivotIdx = startIdx;
  let leftIdx = startIdx + 1;
  let rightIdx = endIdx;
  while (rightIdx >= leftIdx) {
    if (array[leftIdx] > array[pivotIdx] && array[rightIdx] < array[pivotIdx]) {
      swap(leftIdx, rightIdx, array);
      animations.push([leftIdx, rightIdx, array.slice()]);
    }
    if (array[leftIdx] <= array[pivotIdx]) leftIdx++;
    if (array[rightIdx] >= array[pivotIdx]) rightIdx--;
  }
  swap(pivotIdx, rightIdx, array);
  animations.push([pivotIdx, rightIdx, array.slice()]);
  const leftSubarrayIsSmaller = rightIdx - 1 - startIdx < endIdx - (rightIdx + 1);
  if (leftSubarrayIsSmaller) {
    getQuickSortAnimations(array, startIdx, rightIdx - 1, animations);
    getQuickSortAnimations(array, rightIdx + 1, endIdx, animations);
  } else {
    getQuickSortAnimations(array, rightIdx + 1, endIdx, animations);
    getQuickSortAnimations(array, startIdx, rightIdx - 1, animations);
  }

}
function swap(i, j, array) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}



export function getBubbleSortAnimation(array) {

}