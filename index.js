const express = require('express');
const app = express();
const port = 3000;

const mongoose = require('mongoose');
mongoose
	.connect(
		'mongodb+srv://ysonbrian:5842@boilerplate-c0d6g.mongodb.net/<dbname>?retryWrites=true&w=majority',
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: false,
		}
	)
	.then(() => console.log('MongoDB is connected...'))
	.catch((err) => console.log(err));

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () =>
	console.log(`Example app listening at http://localhost:${port}`)
);
