//loops are used to execute a piece of code again and again

//for loop

/*for(let i=1;i<=5;i++){
    console.log("Apna College");
    
}*/

//calculate sum of 1 to 5
/*let sum=0;
let n=100;

for(let i=1;i<=n;i++)
{
sum=sum+i;
}
console.log("sum=",sum);
console.log("loop has ended");
*/

/*for(let i=1;i<=5;i++){
    console.log("i=",i);
    
}*/



//while loop
/*let i=1;
while(i<=10){
    console.log("Maa");
    i++;
}*/

//do-while loop

/*let i=8
;

do{
    console.log("Apna  college");
    i++;
    
}while(i<=10);*/

//for in loop used for objects and array

let student={
    name: "Rajeev kumar",
    age:27,
    cgpa:25,
    ispass:true,

};

for(let i in student){
    //console.log(i); // to print key
    console.log("key",key,"VALUE",student(key));
    
    
}
