```javascript
//Incorrect usage of $inc operator in MongoDB
db.collection('myCollection').updateOne({name:"John"},{$inc:{age:10}});
//This will increment the age by 10 only if the document exists, if not it will not create the document
```