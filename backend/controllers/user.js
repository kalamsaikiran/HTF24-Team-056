import bcrypt from "bcrypt"
import User from "../models/user.js";

export const registerUser = async (req, res) => {
    try {
        const { email, age, password } = req.body;
        if (!email || !age || !password) {
            return res.status(400).json({ message: "Please fill in all fields" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ email, age, password: hashedPassword });
        await user.save();
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error creating user" });
    }
}

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: " email do not exist" });
        }
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(401).json({ message: "Invalid password" });
        }
        res.status(200).json({ message: "User logged in successfully", uid: user._id });
    } catch (error) {
        res.status(500).json({ message: "Error logging in user" });
    }
}


export const getdata = async (req, res) => {
    const { id } = req.params
    try {
        const user = await User.findById(id)
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ message: "Error fetching user data" })
    }
}

