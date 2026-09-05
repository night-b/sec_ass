const userModel = require("../model/userModel.js")

let students = [];
let nextId = 1;

// ==========================================
// 1. Create a Student Account (POST)
// ==========================================
const createUser = async (req, res) => {
    try {
       
        const { name, regNo, email, password } = req.body;

        const user = await userModel.create({
            name,
            regNo,
            email,
            password
        });

        res.status(201).json({
            message: "User created successfully",
            data: user
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const getUserById = async (req, res) => {
    try {
        const { id } = req.params; // or req.body, depending on your route design
        const user = await userModel.findById(id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({
            message: "User fetched successfully",
            data: user
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// UPDATE USER (Only name and password)
const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        
        const { name, password } = req.body;

       const updatedUser = await userModel.findByIdAndUpdate(
    id,
    { name, password },
    { returnDocument: 'after', runValidators: true }
         );

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({
            message: "User updated successfully",
            data: updatedUser
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// ==========================================
// 3. Delete Student Account (DELETE)
// ==========================================
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await userModel.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({
            message: "User deleted successfully",
            data: deletedUser
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//General bget
 const getAllUsers =async (req, res) => {
    try{
        const getAll = await userModel.find()
        return res.status(200).json({
            message: "All users fetched successfully",
            data: getAll
        })
    } catch {error} {
        return res.status(500).json({
            message: error.message
        })
    }
}
module.exports = {createUser, updateUser, deleteUser, getUserById, getAllUsers} 