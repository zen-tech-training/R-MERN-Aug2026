/* global use */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use("order-processing");

//ODM queries

//order-processing is a DB
//customers is a table, is a collection
//tom is a row in a sql, is a document
// table -> collection
//  row -> document


// db.customers.insert({id:1, name:"Tom Joseph", mobile:7865432134})
// db.customers.insert({id:2, name:"Sam", mobile:7865432135})
// db.customers.find();

db.customers.find()  //SELECT * FROM customers
db.customers.find({id:3})  //SELECT * FROM customers WHERE id=1
db.customers.find({id:1}, {mobile:0} )  //SELECT _id, id, name FROM customers WHERE id=1
// db.customers.find({id:1}, {id, name} )  //SELECT _id, id, name FROM customers WHERE id=1
// db.customers.find({id:1}, {name:0 } )  //SELECT _id, id, name FROM customers WHERE id=1




