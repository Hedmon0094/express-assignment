const getAllUsers = (req, res) => {
    res.send('Retrieve all users');
};

const getUserById = (req, res) => {
    res.send(`Retrieve user with ID: ${req.params.id}`);
};

const createUser = (req, res) => {
    res.send('Create a new user');
};

const updateUser = (req, res) => {
    res.send(`Update user with ID: ${req.params.id}`);
};

const deleteUser = (req, res) => {
    res.send(`Delete user with ID: ${req.params.id}`);
};

module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser };
