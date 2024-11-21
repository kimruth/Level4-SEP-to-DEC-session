const mongoose = require('monfoose');
const { schema } = mongoose;

const contactSchema = new Schema({
    name: {
        type: string,
        required: true
    },
    phone: {
        type: string,
        required: true,
        unique: true
    },
    email: {
        type: string,
        required: true,
        unique: true
    },
    created_at: {
        type: dtae,
        required: false,
        default: Date.now
    }
});

module.exports = mongoose.model('contact', conactShema);