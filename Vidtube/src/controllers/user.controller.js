import { asyncHandler } from "../utils/asyncHandler.js";


const registerUser = asyncHandler( async (req, res) => {
   
    const {username, fullname } = req.body
    console.log("username: ", username);

})

export {registerUser}