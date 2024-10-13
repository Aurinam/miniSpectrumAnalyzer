// server.js
const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

// Serve static files (HTML, JS)
app.use(express.static(__dirname));

// Route to fetch Fourier Transform data
app.get('/data', (req, res) => {
    fs.readFile('dft_result.txt', 'utf8', (err, data) => {
		if (err) {
			res.status(500).send('Error reading data');
		} else {
			const cmplx_pt = data.trim().split('\n');
			const result = cmplx_pt.map(pt => {
				const [mag, ang] = pt.split('\t');
				return { mag: Number(mag), ang: Number(ang)};
			});
			res.json(result);
		}
	});
});

// Start the server
app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
