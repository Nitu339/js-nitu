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

let items=[250,645,270,810,50];
for(let i=0;i<items.length;i++){
    let offer=items[i]/10;
    items[i] -=offer;
    console.log(items);
    
}

