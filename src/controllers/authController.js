import {createUser, findUserByEmail} from '../models/userModels.js';


const register = async (req, res) => {
    const {name, email, password} = req.body;

    try {
        const existingUser =  await findUserByEmail(email);
        if (existingUser) {
            return  res.status(400).json({ message: 'User already exists' });
        }

        const newUser = await createUser(name, email, password);
        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Server error' });
    }
}

export { register };    