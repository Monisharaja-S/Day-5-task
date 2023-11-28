//for the given json iterate over all for loops (for for in for of foreach)


var person=[{
    "name":"vijay",
    "age": "20",
    "gender": "male"
    },
{
    "name":"sri",
    "age": "25",
    "gender": "female"
},
{
    "name":"raja",
    "age": "15",
    "gender": "male"   
},
{
    "name":"anu",
    "age": "5",
    "gender": "female"   
}];
console.log(person);


// // for loop 
console.log("JSON iteration using for : ");
for(var i=0;i<person.length;i++)
{
    console.log(person[i]);
}

// //for-in loop json (age)
console.log("JSON iteration using for-in : ");
for(var a in person)
{
   console.log(person[a].age);
}

// // //for-of loop json (gender)
console.log("JSON iteration using for-of : ");
for(var a of person)
{
   console.log(a.gender);
}

//for-each loop json (name)
console.log("JSON iteration using for-each : ");
person.forEach(x => console.log(x.name));
