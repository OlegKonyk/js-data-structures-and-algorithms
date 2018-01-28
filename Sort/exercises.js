// Bubble sort

let randomList = [5, 6, 3, 7, 1, 2, 4]

function bubbleSort(list) {
    let swapFlag;
    do {
        swapFlag = false;
        for (let i = 1; i < list.length; i++) {
            let j = i-1;
            let temp;
            if (list[j] > list[i]) {
                swapFlag = true;
                temp = list[j];
                list[j] = list[i];
                list[i] = temp;
            }
        }
    } while (swapFlag);
    return list;
}

//console.log(bubbleSort(randomList));

function insertionSort(list) {
    for (let i=1; i<list.length; i++) {
        for(let j=0; j<i; j++) {
            if(list[i] < list[j]) {
                let spliced = list.splice(i, 1);
                list.splice(j, 0, spliced[0]);
                break;
            }
        }
    }
    return list;
}

//console.log(insertionSort(randomList));


function mergeSort(list) {
    if (list.length == 1) return list;
    let pivot = Math.floor(list.length/2); // keeps it closer to the left
    let leftList = list.slice(0, pivot);
    let rightList = list.slice(pivot, list.length);
    return merge(mergeSort(leftList), mergeSort(rightList));
}

function merge(leftList, rightList) {
    let merged = [];
    while (leftList.length || rightList.length){
        if(!leftList.length) {
            merged.push(rightList.shift());
        } else if(!rightList.length){
            merged.push(leftList.shift());
        } else if(leftList[0] >= rightList[0]){
            merged.push(rightList.shift());
        } else {
            merged.push(leftList.shift());
        }
    }
    return merged;
}

console.log(mergeSort(randomList))