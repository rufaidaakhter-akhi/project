function createCounter(){
    let counter = 0;
    return function(){
        return counter;
    };
}
let counter = createCounter();
console.log(Counter());