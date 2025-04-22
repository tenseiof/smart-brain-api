const CLARIFAI_URL =
	'https://api.clarifai.com/v2/models/face-detection/outputs';
const CLARIFAI_KEY = process.env.CLARIFAI_KEY;

const handleClarifai = async (req, res) => {
	try {
		const response = await fetch(CLARIFAI_URL, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				Authorization: `Key ${CLARIFAI_KEY}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(req.body)
		});

		const data = await response.json();
		res.json(data);
	} catch (error) {
		console.error('Proxy error:', error);
		res.status(500).json({ error: 'Server error' });
	}
};

export default {
	handleClarifai
};
