//global scop
// let somthing1 ="something1";
// var somthing2 = "something2";
// const somthing3 ="somthing3";

// clock scop 
if(true){
    let name = "test1";
    var somthing2 = 'test2';
    const somthing3 ="test3";
    //work on the block scope for javascript 
// console.log(name, somthing3, somthing3);}
}
// only var wark outside on block scope but does not work outside function scop
console.log(somthing2);

// now time to use function scop
function test(){
    let akhi1 ="name";
    var akhi2 ="let2"
    const akhi3 ="name 3"

    console.log(akhi1,akhi2,akhi3);
}
test();