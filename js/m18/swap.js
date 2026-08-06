let a = 6;
let b = 10;
[a, b] = [b, a];
console.log(a, b);
// ----------------------------------------------------------------
let nums = [1, 2, 3, 4, 5];
let [first,aa,...rest]= nums
console.log(first, aa, rest);
