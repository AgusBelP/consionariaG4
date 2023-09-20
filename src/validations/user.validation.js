const checkRole = (roles) => (req,res,next) => {
    try {
        
        const userRole = req.user[0].rol;
                
        if(!roles.includes(userRole)){
            return res.json({
                message: "Rol no autorizado"
            })
        };

        next();
    } catch (error) {
        
        return res.json({
                message: "Rol no verificado"
            })
    }
};

module.exports = {
    checkRole
}