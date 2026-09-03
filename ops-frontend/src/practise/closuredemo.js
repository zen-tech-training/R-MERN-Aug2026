// function f1(){
//     var v1 = 10;
//     console.log("Inner V1:", v1); //Inner V1: 10
// }
// f1();
// console.log("V1 ----- :", v1); //ReferenceError: v1 is not defined


// //========================== Global Vs Local copy ======================
// var v1 = 10                       //Global copy
// function f1(){
//     var v1 = 20;                  // local copy of v1 variable
//     console.log("Inner V1:", v1); //Inner V1: 20
// }
// f1();
// console.log("Outer V1:", v1); //Outer V1: 10


// //========================== Access Global variable inside the function ======================
// var v1 = 10                         //Only 1 memory location will be allocated
// function f1(){
//     console.log("Inner V1-A:", v1); //Inner V1: 10
//     v1++;
//     console.log("Inner V1-B:", v1); //Inner V1: 11
// }
// f1();
// console.log("Outer V1:", v1); //Outer V1: 11


// //========================== Near to the Closure ======================
// function f1(){
//     var v1;
//     let l1;
//     console.log("f1: ", v1, l1);
//     function f2(){
//         var v2;
//         let l2;
//         console.log("f2: ", v1, l1, v2, l2);
//     }
//     f2(); //f2:  undefined undefined undefined undefined
// }              
// f1();  
// // f1:  undefined undefined
// // f2:  undefined undefined undefined undefined



// //========================== Near to the Closure v2 ======================
// function f1(){
//     var v1;
//     let l1;
//     console.log("f1: ", v1, l1);
//     function f2(){
//         var v2;
//         let l2;
//         console.log("f2: ", v1, l1, v2, l2);
//     }
//     return f2;
// }              
// f1(); // f1:  undefined undefined

// f1()();
// // f1:  undefined undefined
// // f2:  undefined undefined undefined undefined


// //========================== Closure v3 ======================
// function f1(){
//     var v1;
//     let l1;

//     console.log("f1: ", v1, l1);
//     return (()=>{
//         var v2;
//         let l2;
//         console.log("f2: ", v1, l1, v2, l2);
//     });
// }              
// f1(); // f1:  undefined undefined

// f1()();
// // f1:  undefined undefined
// // f2:  undefined undefined undefined undefined


// //========================== Closure v4 ======================
// function f1(){
//     var v1;
//     let l1;
//     console.log("f1: ", v1, l1);
//     return function(){
//         var v2;
//         let l2;
//         console.log("f2: ", v1, l1, v2, l2);
//     }
// }              
// f1(); // f1:  undefined undefined

// f1()();
// // f1:  undefined undefined
// // f2:  undefined undefined undefined undefined



//========================== Closure ======================
// function f1(){
//     var v1 = 100;
//     let l1 = 200;
//     console.log("f1: ", v1, l1);
//     return function(){
//         var v2 = ++v1;
//         let l2 = l1++;     //Post increment
//         console.log("f2: ", v1, l1, v2, l2);
//     }
// }              
// f1(); // f1:  100 200

// f1()();
// f1:  100 200
// f2:  101 201 101 200


//========================== Closure ======================
function f1(){
    var v1 = 100;
    let l1 = 200;
    return function(){
        var v2 = ++v1;
        let l2 = l1++;     //Post increment
        console.log("f2: ", v1, l1, v2, l2);
    }
}              
let innerFunctionRef = f1();
innerFunctionRef(); //f2:  101 201 101 200
innerFunctionRef(); //f2:  102 202 102 201


// f1() - fetchData() -
// f1() is fetching a data from the backend API and 
// the response will be stored in the "res" variable

// f2("TV") - filterFunction("TV") -
// From the "res" variable, filter out few records, 
// and the final output can be stored in filteredProducts variable


// f2("Laptop") - filterFunction("Laptop") -
// From the "res" variable, filter out few records, 
// and the final output can be stored in filteredProducts variable

// function fetchDataFromAPI(){
//     const response = fetch("API_URL"); //[].length = 500
//     function filterFunction(subcategory){
//         const filteredProducts = response.filter((curProduct)=>curProduct.subcategory===subcategory)
//         setProductState(filteredProducts)
//     }
//     return filterFunction;
// }
//  const innerFunRef = fetchDataFromAPI();
//  innerFunRef("TV")
//  innerFunRef("Laptop")