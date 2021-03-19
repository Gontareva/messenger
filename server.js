const express = require('express');

const PORT = 3000;
const app = express();

app.use(express.static('./'));

app.listen(PORT, 'localhost', () => {
	console.log(`Server is running on localhost:${PORT}`)
});
