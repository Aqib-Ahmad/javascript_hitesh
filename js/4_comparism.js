// console.log("2">1);


// datatypes

// (PRIMITY )

// [String
// null
// Number
// Boolean
// undefined
// Symbol
// BigInt]


// let id = Symbol("123")
// let anotherid = Symbol("123")
// console.log(id == anotherid);

// Reference (non Primity )

// Array , Objects , Function



// ---------------MEMORY ----------------

// we have two types of meory  

    // stack(primity )   => we have copy of data not actual data 

    //  heap(non primity)  =>we have original of data 



// Here , copy of the variable is given to varTwo of vaeOne(Primitve(stack))
// let varOne = "khan";
// let varTwo = varOne;

// varTwo="aqib ahmad khan"
// console.log(varOne);
// console.log(varTwo);


// Here , original value is given to offdata2 of offdata(heap)

// let offdata ={
//     name:"a khan",
//     Email:"aqib@gmail.com"
// }

// let offdata2= offdata;
// offdata2.name="Danish khan"
// console.log(offdata);
// console.log(offdata2);

let strg = "     khan    ";
console.log(strg);
console.log(strg.trim());

let data  = "https://khan.com/htsh%20khan";
console.log(data.replace('%20' , '_'));
// console.log(data.includes('khana'));
console.log(data.split('khan'));