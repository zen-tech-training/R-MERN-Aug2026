const arr = [];
const companyName = "Abc Pvt. Ltd.";
arr.push({ id:1, name:"Tom" })
arr.push(29);
arr.push("Pune");
console.log(companyName);
// console.log(arr);
for(i=0; i<arr.length; i++){
    console.log(arr[i]);
}
arr.map( ()=>{} )
function f1(){}
arr.map(f1)
arr.length = 0;
console.log("Array:", arr);
arr.push({id:1, name:"Alice", address: {bldgNum:123, bldgname:"Zen", street:"AB Road", city:"Pune", pin:412200}});

arr.push({id:2, name:"Bob", address: {bldgNum:3, bldgname:"Gera", street:"AB Road", city:"Chennai", pin:212200}});

arr.push({id:3, name:"Cian", address: {bldgNum:123, bldgname:"", street:"AB Road", city:"Chennai", pin:212200}});

//map/ find/ filter/ reduce / some / ................
let result;
// result = arr.map((curEle)=>{
//   if(curEle.address.city === "Chennai") return curEle
//   else return "Unmatching Record"
// } );
// Output: ["Unmatching Record", 2nd ele, 3rdEle]

// result = arr.map((curEle)=>{
//   if(curEle.address.city === "Chennai") return curEle  
// } );
// Output: [undefined, 2nd ele, 3rdEle]


//Filter
// result = arr.filter((curEle)=>{
//   if(curEle.address.city === "Chennai") return curEle  
// } );
//Output: [2nd ele, 3rdEle]

// result = arr.filter((curEle)=> (curEle.address.city === "Chennai")  );
//Output: [2nd ele, 3rdEle]

//Find
//result = arr.find((curEle)=> curEle.address.city==="Chennai")
//Output: 2nd ele

//some - checks for existness
// result = arr.some((curEle) => curEle.id < 0)
// Output: false

// result = arr.every((curEle) => curEle.id > 0)
// Output: true

let arr2 = [1, 6, 4];
result = arr2.reduce((acc, curr)=> acc+curr, 0)
//Output: 11

arr2 = ["1", "6", "4"];
result = arr2.reduce((acc, curr)=> acc+curr, "0")
//Output: 0164

console.log("Filtered Result: ", result);