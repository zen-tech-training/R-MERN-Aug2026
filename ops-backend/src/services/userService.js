import user from "../models/user.js";
const getAllUsers = () => user.find();

export {getAllUsers}