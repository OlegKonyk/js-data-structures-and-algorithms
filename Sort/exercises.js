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