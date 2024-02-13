const getUser = require(./src/getUserSync);

getUser(1,(user) => {
  console.log(user);
})

getUser(2,(user) =>{
  console.log(user);
})

const sum = 2+3;
console.log(sum);