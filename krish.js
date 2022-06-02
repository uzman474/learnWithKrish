function numberSeq(arr){
    let missArray = [];

    //Math.min(1,2,3); //1
    let minNum = Math.min(...arr);
    let maxNum = Math.max(...arr);

    // indexOf return its postition , not there in -1
    for(let i = minNum; i < maxNum; i++){
        if(arr.indexOf(i) < 0) {
            missArray.push(i);
        }
    }
    return missArray;
}

console.log(numberSeq([21,25,29,28,22,24,27,26,30]));//inituializes