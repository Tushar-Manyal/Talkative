import jwt from "jsonwebtoken"

export const generateToken=(userId,res)=>{
    const token=jwt.sign({userId},process.env.JWT_SECRET,{expiresIn:"7d"});

    res.cookie("jwt", token, {
        // maxAge:7*24*60*60*1000, //7days
        // httpOnly: true,       // JS can't access it
        // sameSite: 'strict',    // CSRF protection
        // secure: process.env.NODE_ENV !== "development"      // only sent over HTTPS



        httpOnly: true,  // Cannot access via JS
        secure: process.env.NODE_ENV === "production",  // Only send over HTTPS in prod
        sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax", // Allow cross-site cookies in prod
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    })
    return token;
}


//GIT HUB

// import jwt from "jsonwebtoken";

// export const generateToken = (userId, res) => {
//   const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
//     expiresIn: "7d",
//   });

//   res.cookie("jwt", token, {
//     maxAge: 7 * 24 * 60 * 60 * 1000, // MS
//     httpOnly: true, // prevent XSS attacks cross-site scripting attacks
//     sameSite: "strict", // CSRF attacks cross-site request forgery attacks
//     secure: process.env.NODE_ENV !== "development",
//   });

//   return token;
// };
