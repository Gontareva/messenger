const express = require('express');
const scss = require('scss');

const PORT = 3000;

const app = express();

app.use('/static', express.static('./static'));
scss.renderSync({ file: 'public/main.scss' });

app.listen(PORT, 'localhost', () => {
	//eslint-disable-next-line
	console.log(`Server is running on localhost:${PORT}`);
});
