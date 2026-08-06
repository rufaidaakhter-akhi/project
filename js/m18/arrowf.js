const calculateShipping=(orderAmount, shippingFee =60 )=>{
 
    if(orderAmount>=1000){
        return `free shiping`
    }
    else{ 
        return `shipping fee : ${shippingFee} Taka`
    }

}


console.log(calculateShipping(1000));
console.log(calculateShipping(400));
console.log(calculateShipping(5600));
console.log(calculateShipping(900));
console.log(calculateShipping(760));
console.log(calculateShipping(7770));
console.log(calculateShipping(670));
console.log(calculateShipping(1000));