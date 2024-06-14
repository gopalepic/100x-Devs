interface User {
    firstName: string;
	lastName: string;
	age: number;
}

function filterUser(user:User[]) {
  return user.filter(x=> x.age > 18 ) 
}

console.log(filterUser([ {
    firstName: "Epic",
	lastName: "string",
	age: 33
}, {
    firstName: 'gopal',
	lastName: "justEpic",
	age: 1
}]))




