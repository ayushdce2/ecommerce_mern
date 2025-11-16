const rolebasedAccess = (role) => {
    
    return (req, res, next) => {
        
        try {
            if(!role.includes(req.user.role)){
                return next(res.status(403).json({message:`${req.user.role} - is not allowed to modify the resource`}));
            }
            
        } catch (error) {

            console.log(error, "error");
        }


        next();

    }

};

module.exports = { rolebasedAccess };
