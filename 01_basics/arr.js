//create Array

//let heros=["ironman","hulk","spiderman","thor","batman"];
//console.log(heros[3]);

/*let marks=[97,96,78,98,68,100];
for(let idx=0;idx<marks.length;idx++){
    console.log(idx);//to print the index of an array
    
    console.log(marks[idx]);//to print the value
    
}
*/

let flowers=["Rose","lotus","lily","tulip","jasmine","sunflower"];
/*for(let idx=0;idx<flowers.length;idx++){
    console.log(flowers[idx]);
    
}*/

//for of loop

/*for(let flower of flowers){
    console.log(flower);
    
}*/

/*let cities=["delhi","pune","mumbai","dehradun","gurgaon","hyderabad"];
for(let city of cities){
    console.log(city);
    
}*/
/* practice ques1

let marks=[85,97,44,37,76,60];

let sum=0;
for(let val of marks){
    sum+=val;
}
let average=sum/marks.length;
console.log("The average of marks is",average); */

// ques2

/*let items=[250,645,270,810,50];
for(let i=0;i<items.length;i++){
    let offer=items[i]/10;
    items[i] -=offer;
    console.log(items);
    
}*/

//Array methods

//Pop() used to remove an element from the end of an array

//let foodItems=["Paneer tikka","chicken lolipop","BIRYANI","cutlet","sandwich"];
//console.log(foodItems);

//let deletedItems=foodItems.pop();
//console.log(foodItems);

//push() to add new elements in an array

//foodItems.push("chips","burger","pizza","fried rice");
//console.log(foodItems);

//to string  (converts an array into string)
/*let fruits=["Mango","Litchi","Orange","gauva","Papaya","grapes"];
console.log(fruits);
console.log(fruits.toString()); // array converted into strings
console.log(fruits);*/ // original array doesn't changes, this chages reflects only on new array
/*
let marks=[89,56,90,79,80,98]
//console.log(marks.toString());

let marvelHeros=["thor","spiderman","ironman","antman","superman"];
let dc_heros=["superman","batman"];

let heros=marvelHeros.concat(dc_heros);
//console.log(heros);

//unshift add elements to the beginning of an array

marvelHeros.unshift("antman","shaktiman");
//console.log(marvelHeros);

//shift remeoves elements from the begining of an array

let val=marvelHeros.shift();
//console.log("deleted",val);

//slice return a piece of an array slice(start idx,end idx)
//
//console.log(marverHeros.slice(0,4));

//splice changes original array (add,remove,replace)*/

let arr=[1,2,3,4,5,6,7];
//splice(start idx,delcount,newelement
// //
//lice[3,4,100,101,102,104];
arr.splice(2,2,101,102);
console.log(arr);










