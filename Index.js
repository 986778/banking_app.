const Customer = require("./Customer");

let g1 = Customer.newAdmin('Saurabh', 'Tiwari')

let user1 = g1.newCustomer('Sarvesh', 'Tiwari')
let user2 = g1.newCustomer('Satyam', 'Pandey')
console.log(g1.getAllCustomer());

g1.updateCustomer(2, 'firstName', 'Saurabh')
console.log(g1.getAllCustomer());

g1.createBank('Central bank of India')
g1.createBank('HDFC')
g1.createBank('Canara Bank')
console.log(g1.getAllBank());

g1.updateBank(1, 'fullName', 'Bank of America')
console.log(g1.getAllBank());

g1.deleteBank(1)
console.log(g1.getAllBank());




user1.createAccount(0)
user1.createAccount(2)
user2.createAccount(2)
console.log(user1.getAllAccount())
console.log(user2.getAllAccount())

user1.deleteAccount(0)
console.log(user1.getAllAccount())

user1.deposit(1, 3500)
console.log(user1.getAllAccount())

console.log(user1.passbook(1));

