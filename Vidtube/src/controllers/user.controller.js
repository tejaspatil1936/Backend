import { asyncHandler } from "../utils/asyncHandler.js";


const registerUser = asyncHandler( async (req, res) => {
    console.log('registerUser called', req.body);
    res.status(200).json({
        message: "hello tejas"
    })

})

export {registerUser}