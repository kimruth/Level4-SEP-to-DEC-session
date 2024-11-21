const { Schema, model } = require('mongoose');

const notificationSchema = new Schema({
    sender: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    receiver: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        }
    ],
    type:  {
        type: string,
        required: true,
        enum: ['message', 'assignment', 'reminder'],
        default: time

    }

});

module.exports = model('Notification', notificationSchema);