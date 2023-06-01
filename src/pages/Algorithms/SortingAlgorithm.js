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
  const animations = [];
  if (array.length <= 1) return animations;
  let isSorted = false;
  let counter = 0;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < array.length - 1 - counter; i++) {
      animations.push([i, i + 1]); // Push the indices of the two elements being compared
      if (array[i] > array[i + 1]) {
        swap(i, i + 1, array);
        isSorted = false;
        animations.push([i, i + 1, array.slice()]); // Push the swapped elements
      } else {
        animations.push([i, i + 1, null]); // Push null to skip over the swapped elements
      }
    }
    counter++;
  }
  return animations;
}
export function getHeapSortAnimations(array) { const animations = []; heapSort(array, animations); return animations; } function heapSort(array, animations) {
  const n = array.length; // Build heap (rearrange array) 
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) heapify(array, n, i, animations); // One by one extract an element from heap 
  for (let i = n - 1; i > 0; i--) { // Move current root to end 
    animations.push([0, i]); swap(array, 0, i); // call max heapify on the reduced heap 
    heapify(array, i, 0, animations);
  }
}
function heapify(array, n, i, animations) {
  let largest = i;
  // Initialize largest as root 
  let left = 2 * i + 1;
  // left = 2*i + 1 
  let right = 2 * i + 2;
  // right = 2*i + 2 
  // If left child is larger than root 
  if (left < n && array[left] > array[largest]) largest = left;
  // If right child is larger than largest so far
  if (right < n && array[right] > array[largest]) largest = right;
  // If largest is not root 
  if (largest !== i) {
    animations.push([i, largest]); swap(array, i, largest);
    // Recursively heapify the affected sub-tree 
    heapify(array, n, largest, animations);
  }
}