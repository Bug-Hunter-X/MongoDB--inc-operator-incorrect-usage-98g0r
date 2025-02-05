```javascript
//Correct usage of $inc operator with upsert option
db.collection('myCollection').updateOne({name:"John"},{$inc:{age:10}}, {upsert:true});
//This will increment the age by 10 if the document exists, if not it will create the document with age 10
```