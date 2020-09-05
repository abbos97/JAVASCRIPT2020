/**
 * while loop: same with Java
 * do-while loop: same with Java
 * for loop: same with Java
 * 
 * break: exits the loop or switch statement
 * continue: skip the iteration
 * 
 *for in loop: 
 for of loop:

 */

 /*var i=0;
 while(i<=10){
     console.log(i);
     i++
 }
 */

 /*for(var i=0; i<10; i++){
     console.log(i);
 }
 */

 /*var i=5;
 while(i>0){
     if(i==3){
         continue;
     }
     console.log(i);
     i--;
 }
 */
/*for(var i=0; i<10; i++){
    console.log(i);
    
}
*/

var arr=[1, 2, 3, 4, 5, 10.5]
//       0  1  2  3  4   5

/**
 * for(name in arr){
 * }
 */

 for(each in arr){
     console.log(each);
 }

 console.log("=========================");

 var strArray=["Madina","Waris","Ruhan", "David", "Abbos","Shirin", "Akbar"];

 for(name in strArray){
     console.log(strArray[name]);
 }

 console.log("=========================");

 for(var i=0; i<strArray.length; i++){
     console.log(strArray[i]);
 }