// var x = 1;
// a();
// b();
// console.log(x);

// function a() {
//     var x = 10;
//     console.log(x);
// }

// function b() {
//     var b = 100;
//     console.log(b);
// }

// Execution context
// Phase 1 - memory allocation x:undefined a:{}, b:{}
// Phase 2 - x: 2(undefined will be replaced by 1). Now the code moves from 1 to 2, not the function a is invoked and a new execution context is created it will again go through 2 phases, phase one will be memorty allocation for b:undefined and in the phase 2 x will be 10 and cosole log is x and the funciton is returned and the execution context will be removed
// now the control goes to line 3 an new function is invoked -> new execution context and so ont

// function a() {
//     var b = 10;
//     c();
//     function c() {
//         console.log(b);
//     }
// }

// a();

// a's lexical environment is a local and window(global)
//  b has b local, its parent a, and a's parent global
// c has its local, b(c's parent), a(b's parent) and global

// ..........CLOUSERS...........s

// function x() {
//     var a = 7;
//     function y() {
//         console.log(a);
//     }
//     return y;
// }
// var z = x();

// for (let i = 1; i <= 5; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, i * 1000);
// }
