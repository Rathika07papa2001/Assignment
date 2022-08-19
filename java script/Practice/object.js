let employee={
    id :101,
    Name :"Rathika",
    sal:40000,

}
let keys=Object.keys(employee)//object length
console.log(keys.length);

employee.sal=450000
employee.locality="Hydrabad"
console.log(employee)// sal update 

for(key in employee){
    console.log(key); // only keys
}


for(key in employee){
    console.log(employee[key]);//only values
}


console.log(employee.id); 