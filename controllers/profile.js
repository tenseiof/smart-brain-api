const handleProfile = (req, res, db) => {
	const { id } = req.params;
	db.select('*')
		.from('users')
		.where({ id })
		.then(user => {
			if (user.length) {
				res.json(user[0]);
			} else {
				res.status(400).json('Not found');
			}
		})
		.catch(err => {
			console.error(err);
			res.status(400).json('error getting user');
		});
};

export default {
	handleProfile
};
