const authServices = require('../services/auth.services')


async function userAuthEmail(email) {
    try {
        const user_email = await authServices.userEmail(email);
        return user_email;
    } catch (error) {
        throw error
    }
};

async function userAuthId(id) {
    try {
        const user = await authServices.userById(id);
        return user;
    } catch (error) {
        throw error
    }
};


module.exports = {
    userAuthEmail,
    userAuthId
}
