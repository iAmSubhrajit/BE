const { add, substract, multiply } = require('my-calculation-module') 
const { first_name, last_name, role } = require('./info') //from relative path
// const info = require('./info')


add(10,20)
substract(20,10)
multiply(10,0)

console.log(`first-name: ${first_name} \nlast-name: ${last_name}\nrole: ${role}`);