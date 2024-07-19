let ordinalNumber = [1,2,3,4,5,6,7,8,9];
for (let i = 0;i <ordinalNumber.length;i++){
    if (ordinalNumber[i] == 1){
        console.log(`${ordinalNumber[i]}st`)
    }
    if (ordinalNumber[i] == 2){
        console.log(`${ordinalNumber[i]}nd`)
    }
    if (ordinalNumber[i] == 3){
        console.log(`${ordinalNumber[i]}rd`)
    }
    if (ordinalNumber[i] >= 4){
        console.log(`${ordinalNumber[i]}th`)
    }
    }