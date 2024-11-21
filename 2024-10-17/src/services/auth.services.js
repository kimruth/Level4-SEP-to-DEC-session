const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const  User = require('../models/User');

const hashPassword = async (password) => {
    try {
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(password, salt);
    } catch (error) {
        throw new Error('Invalid password: ' + error.message);
    }
}

const hashCompare = async (value, hash) => {
    try {
        return await bcrypt.compare(value, hash);
    } catch (error) {
        return false;
    }
}

const tokenVerify = (token) => {
    try {
        return jwt.verify(token, 'secret_key');
    } catch (error) {
        return false;
    }
};

const verifyIfIsUnique = async (field, value) => {

    // let where = {};
    // if (field === 'email') {
    //     where = { email: value }
    // } else if (field === 'username') {
    //     where = { username: value }
    // }

    // return await User.findOne(where);

    return await User.findOne({[field]: value});
};

const register = async (data) => {

    const password = await hashPassword(data.password);
    data.password = password;

    const user = new User(data);
    await user.save();
    return {
        error: false,
        message: 'User registered successfully.'
    }
}

const login = async (user, password) => {

    const compare = await hashCompare(password, user.password);
    if (!compare) {
        return {
            error: true,
            message: 'Invalid email or password.'
        }
    }

    const token = jwt.sign({ id: user._id }, 'secret_key', { expiresIn: '1h' });
    return {
        error: false,
        message: 'Login successful.',
        token: token
    }
}


const resetPassword = async (password, code) => {
    try {
        const userOTP = await userOTP.findOne({code: code});
    if(!userOTP) {
        return {
            error: true,
            message: 'Invalid OTP'
        }
    }
    // const user = await User.findById(userOTP.id_user);
    user.password = hashPassword(password);
    await user.save();
    
    await userOTP.deleteOne({_id: userOTP._id})
    } catch (error) {
        return {
            error: true,
            message: 'Fail to reset password'
        }
    }
}


module.exports = { verifyIfIsUnique, register, login, tokenVerify };