function maxNumber(arr){
    let topNum = [];

    for(let i = 0; i < arr.length; i++){
        let currNum = arr[i];
        let isTop = true;

        for(j = i + 1; j < arr.length; j++){
            let rightNum = arr[j];
            if(rightNum >= currNum){
                isTop = false;
                break;
            }
        }
        if(isTop){
            topNum.push(currNum);
        }
    }
    console.log(topNum.join(" "));
}
maxNumber([1, 4, 3, 2])