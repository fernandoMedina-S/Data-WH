const admin = [
    {email: "fernando123444@gmail.com", UID: "xrrblQhC6MUbNmXuJiW4PPKWzdC2"},
    
]

const isAdmin = (UID) => { 
    let xd = false;
    admin.forEach((user)=>{
        if(user.UID === UID){
            xd = true;
        }
    })
    return xd;
}

export default isAdmin;