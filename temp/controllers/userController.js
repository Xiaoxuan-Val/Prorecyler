var User = require('../models/users');

// function to handle a request to get all users
getAllUsers = async (req, res) => {
	await User.find({}, (err, users) => {
		if (err) {
			return res.status(400).json({ success: false, error: err });
		}
		if (!users.length) {
			return res
				.status(404)
				.json({ success: false, error: `User not found` });
		}
		return res.status(200).json({ success: true, data: users });
	}).catch((err) => console.log(err));
};

// function to handle a request for a specific user
getUserByID = async (req, res) => {
	await User.findOne({ _id: req.params.id }, (err, user) => {
		if (err) {
			return res.status(400).json({ success: false, error: err });
		}

		if (!user) {
			return res
				.status(404)
				.json({ success: false, error: `User not found` });
		}
		return res.status(200).json({ success: true, data: user });
	}).catch((err) => console.log(err));
};

// function to handle request to add a new user to the database
createUser = (req, res) => {
	const body = req.body;
	if (!body) {
		return res.status(400).json({
			success: false,
			error: 'You must provide a username and password',
		});
	}

	const user = new User(body);

	if (!user) {
		return res.status(400).json({ success: false, error: err });
	}

	user.save()
		.then(() => {
			return res.status(201).json({
				success: true,
				id: user.id,
				message: 'User created!',
			});
		})
		.catch((error) => {
			return res.status(400).json({
				error,
				message: 'User not created!',
			});
		});
};

// function to handle a user being deleted from the database
deleteUser = async (req, res) => {
	await User.findOneAndDelete({ _id: req.params.id }, (err, user) => {
		if (err) {
			return res.status(400).json({ success: false, error: err });
		}

		if (!user) {
			return res
				.status(404)
				.json({ success: false, error: `User not found` });
		}

		return res.status(200).json({ success: true, data: user });
	}).catch((err) => console.log(err));
};

// function to update details for a user
updateUser = async (req, res) => {
	const body = req.body;

	if (!body) {
		return res.send(400).json({
			success: false,
			error: 'You must provide a body to update',
		});
	}

	User.findOne({ _id: req.params.id }, (err, user) => {
		if (err) {
			return res.status(404).json({
				err,
				message: 'User not found',
			});
		}
		user.userName = body.userName;
		user.password = body.password;
		user.save()
			.then(() => {
				return res.status(200).json({
					success: true,
					id: user._id,
					message: 'User updated',
				});
			})
			.catch((error) => {
				return res.status(404).json({
					error,
					message: 'User not updated!',
				});
			});
	});
};

module.exports = {
	getAllUsers,
	getUserByID,
	createUser,
	deleteUser,
	updateUser,
};
