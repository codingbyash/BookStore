import User from "../model/user.model.js";
import bcryptjs from "bcryptjs"; //password ko chhupane ke liye
export const signup = async(req, res) => {
    try {
        const { fullname, email, password } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }
        const hashPassword = await bcryptjs.hash(password, 10); // password ko secure kar rhe hai
        const createdUser = new User({ //body se aaye hue data se user create kar rhe hain
            fullname: fullname,
            email: email,
            password: hashPassword, //pehle yaha password tha to dikh rha tha database mei but ab hashpassword likha to decrypted dikh rha hai
        });
        await createdUser.save();
        res.status(201).json({
            message: "User created successfully",
            user: {
                _id: createdUser._id,
                fullname: createdUser.fullname,
                email: createdUser.email,
            },
        });
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};
//ISSE UPAR SARA KAAM SIGNUP KA HUA HAI AB ISSE NEECHE LOGIN KA HOGA
export const login = async(req, res) => {
    try {
        const { email, password } = req.body; //LOGIN ke time bass email pass chiye
        const user = await User.findOne({ email });
        const isMatch = await bcryptjs.compare(password, user.password);// password match kar rhe hai database se || 
        // await use karna is must bcoz jabtak response nahi aa jata tabtak hold karke rakho
        if (!user || !isMatch) {
            return res.status(400).json({ message: "Invalid username or password" });
        } else {
            res.status(200).json({
                message: "Login successful",
                user: { //ye sab send kar rhe hai kyuki iska kaam karege frontend mei
                    _id: user._id,
                    fullname: user.fullname,
                    email: user.email,
                },
            });
        }
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};