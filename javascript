Question 1:

var employees = [
    { id: 10, name: 'John', experience: 5},
    { id: 15, name: 'Mathew', experience: 7},
    { id: 20, name: 'keith', experience: 12},
    { id: 25, name: 'louis', experience: 5},
    { id: 30, name: 'mark', experience: 4},
    { id: 35, name: 'Ash', experience: 3},
    { id: 40, name: 'robert', experience: 6},
]

Print: All ID’s in an array example: [10, 15, 20, 25, 30, 35, 40]

Print: TOTAL no of years’ experience they all have

Print: All employees whose experience is greater than 5 years

var empId=[];
employees.forEach(emp=>{
	empId.push(emp.id);
});
console.log(empId);

employees.forEach(elem=>{
	console.log('total num of experience '+ elem.experience);
	});

Question 2:

let cat = {
    catName: 'Kitty',
    sayName () {
        console.log(this.catName);
    }
}

let sayName = cat.sayName;

Fix to Print out ‘Kitty’
let cat = {
    catName: 'Kitty',
    sayName () {
       				console.log(this.catName);
    			}
}
let sayName = cat.sayName();

Question 3:

class user {
    displayName() {
        return this.name + ‘ is in ‘ + this.location;
    }
}

var user1 = new user(‘Marlabs’, ‘New Jersey’);

console.log(user1.displayName());

Print: ‘Marlabs is in New Jersey’ (DO NOT create variables outside the User class)

class user {
	constructor(na1,lo1){
		this.name=na1;
		this.location=lo1;
	}
    displayName() {
        return this.name + ' is in ' + this.location;
    }
}

var user1 = new user('Marlabs', 'New Jersey');

console.log(user1.displayName());
Question 4:

function myName(fName, lName) {
    console.log(`my name is ${fName} ${lName}`);

    function fullDetails(companyName) {
        const value = `my name is ${fName} ${lName} and I work for ${companyName}`
        return value;
    }

    return fullDetails;
}

Print: ‘My name is Althaf Pattan and I work for Marlabs’

function myName(fName, lName) {
    
    console.log(`my name is ${fName} ${lName}`);

    function fullDetails(companyName) {
        let value = `my name is ${fName} ${lName} and I work for ${companyName}`
        return value;
    }
    // fullDetails("Marlabs");
    return fullDetails;
}
myName("althaf","pathan")("Marlabs");


Question 5:

var pokemon = {
    firstname: 'Pika',
    lastname: 'Chu ',
    getPokeName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var pokemonName = function(snack, hobby) {
    console.log(this.getPokeName() + 'I choose you!');
    console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
};

Print: ‘Pika Chu  loves sushi and algorithms’

var pokemon = {
    firstname: 'Pika',
    lastname: 'Chu ',
    getPokeName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var pokemonName = function(snack, hobby) {
    console.log(this.getPokeName() + 'I choose you!');
    console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
};
pokemonName.apply(pokemon,['sushi','algorithms']);


Question 6:

var x = ‘5’; 
var promise1 = new Promise(function(resolve, reject) {
    if (x  = 5) {
        let data = {
            name: 'Marlabs',
            address: {
                state: 'NJ',
                zip: 084444
            }
        }
        console.log(data);
        resolve();
    } else {
        var res = new Error('failed......');
        reject(res);
    }
});

var promise2 = function(address) {
    var msg = address.state + ' ' + address.zip;
    return Promise.resolve(msg);
}

var myFunc = function() {
    promise1
    .then(promise2)
    .then((data) => {
        console.log(data);
    })
    .catch(err => {
        console.log(err.message);
    });
};

Print: ‘Marlabs address: New jersey, 08444’ 
