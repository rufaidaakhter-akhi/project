const calculateShipping=(orderAmount, shippingFee =60 )=>{
 
    if(orderAmount>=1000){
        return `free shiping`
    }
    else{ 
        return `shipping fee : ${shippingFee} Taka`
    }

}


console.log(calculateShipping(1000));