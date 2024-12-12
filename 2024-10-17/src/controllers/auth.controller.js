const authService  = require('../services/auth.services');
const emailService = require("../../sendMail")
const login = async (req, res) => {

    const verify = await authService.login(req.user, req.body.password);
    if (!verify.error) {
        return res.json(verify);
    }

    return res.status(400).json(verify);
};

const register = async (req, res) => {
    const create = await authService.register(req.body);
    res.status(201).json(create);
};

const contact = (req, res)=>{
    const { email, subject , message} = req.body;
   emailService.sendEmail(email, subject ,message);
}

module.exports = { login, register };