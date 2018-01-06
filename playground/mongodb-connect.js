const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	// db.collection('Todos').insertOne({
	// 	text: 'Something to do', 
	// 	completed: false
	// }, (err, result) =>  {
	// 	if (err) {
	// 		return console.log('Unable to insert todo,', err)
	// 	}

	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });

	//Insert new doc into the Users collection 
		//name, age, location string

	db.collection('Users').insertOne({
		name: 'Anthony Shalagin',
		age: '22',
		location: 'Brooklyn, New York'
	}, (err, result) => {
		if (err) {
			return console.log('Unable to insert details', err)
		}
		console.log(JSON.stringify(result.ops, undefined, 2));
	});

	db.close();
});