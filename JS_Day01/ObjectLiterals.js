
var Employee1={
EmployeeName : "Sait",
EemployeeID : 12,
Salary : 100000
};

console.log(Employee1);

console.log(Employee1.EmployeeName); //Sait
console.log(Employee1["EmployeeName"]); //Sait

console.log("============");

for( each in Employee1){
    console.log(each + " : "+Employee1[each]);
}

console.log("====================================");

var Employees={

    Mehmet:{
        Name:"Mehmet",
        Salary: 120000
    },

    Shirin:{
        Name: "Shirin",
        Salary: 130000
    },
    Tural:{
        Name: "Tural",
        Salary: 140000
    },
    Abbos:{
        Name: "Abbos",
        Salary: 200000
    }
};

console.log(Employees.Abbos);
console.log(Employees["Abbos"]);

console.log(Employees.Abbos.Salary);
console.log(Employees["Abbos"]["Salary"]);


console.log("========================================");

