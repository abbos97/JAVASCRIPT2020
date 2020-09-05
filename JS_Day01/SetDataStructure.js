var set= new Set();

/**
 * add(Values): add the value to the set
 * delete(value): delete
 * clear(): removes everything clear
 * has(Value): contains
 * 
 * value():
 */

 set.add(10);
 set.add(10);
 set.add(10);
 set.add("Yusuf");
 set.add("Mizgin");
 set.add("Mehmet");
 set.add('@');
 set.add(true);


 console.log(set);

 set.delete(10);
 console.log(set);


//  set.clear();
//  console.log(set);

 var bool1 =set.has("Mizgin");
 console.log(bool1);

 console.log("====================");
 /**
  * for of loop: similer to loop
  * for of loop: 
  * for(var varname of set.values()  ){
  * }
  */

  for( var each  of  set.values () ){
      console.log(each);
  }

  console.log("====================");

  var students =["Nurullah", "Shirin", "Sukran", "Nurzat"];

  for(var eachStudent  of students.values() ){
      console.log(each);
  }