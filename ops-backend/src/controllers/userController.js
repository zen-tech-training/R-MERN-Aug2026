import { getAllUsers } from "../services/userService.js";

const getUsers = async (req, res) => {
    try {
        const users = await getAllUsers();
        console.log("I am in userController");
        console.log(users);
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { getUsers };
