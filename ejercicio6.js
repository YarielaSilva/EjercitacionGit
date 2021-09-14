let isALargeNumber= number => {
    if(number< 50){
        console.log("Es un numero pequeño");
    }else if(number>1000){
        console.log("Es un numero muy grande");
    }else{
        console.log("Es un numero grande");
    }
};
let numero= 4;
isALargeNumber(numero);