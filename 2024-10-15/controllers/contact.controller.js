const contact = require('../models/contact')

const getAll = async(request, response) => {
    try {
        const contacts = await contact.find();
        response.json(contacts);
    } catch(error) {
        response.status(500).json({
            error: true,
            message: "Error retrieving contacts"
        });
    }
};

const getOneById = async(request, response) => {
    try {
        const { id } = request.params;
        const contact = contact.find({_id: id });

        if (!contact) {
            response.status(404).json({ message: 'Contact not found' });
        } else {
            response.json(contact);
        }
    } catch (error) {
        response.status(500).json({
            error: true,
            message: "Error retrieving contacts"
        });
    }
};

const createOne = async (request, response) => {
    const body = request.body;
    const newContact = new Contact({
        name: body.name,
        phone: body.phone,
        email: body.email,
    });

    // ASYNC / AWAIT Method
    // try {
    //     await newContact.save();
    //     response.status(201).json({
    //         error: false,
    //         message: "Contact created successfully"
    //     })
    // } catch(error) {
    //     response.status(500).json({
    //         error: true,
    //         message: "Error saving contact"
    // }

    // Callback Method:
    // newContact.save((error, data) => {
    //     if(error) {
    //         response.status(500).json({
    //             error: true,
    //             message: "Error saving contact"
    //     });
    // } else {
    //     response.status(201).json({
    //         error: false,
    //         message: "Contact created successfully"
    //     });
    // }
    // });

    // PROMISE Method
    newContact.save().then(connexion => {
        response.status(201).json({
            error: false,
            message: "Contact created successfully"
        })
    }).catch(error => {
        response.status(500).json({
            error: true,
            message: "Error saving contact"
        })
    });
};

const updateOneById = async (request, response) => {
    try {
        const id = request.params;
        const body = request.body;
        await contact.findByIdAndupdate(id, { ...body });
        response.json({ error: false, message: "Contact updated successfully" });
    } catch (error) {
        response.status(404).json({
            error: true,
            message: 'Contact not found'
        });
    }
};


const deleteOneById = async (request, response) => {
    try {
        const { id } = request.params;
        await contact.findByIdAndDelete(id);
        response.json({ error: false, message: "Contact deleted succesfully" });
    } catch (error) {
        response.status(404).json({
            error: true,
            message: "Contact not found"
        })
    }
};

const sortByQuery = (request, response) => {
    const { key, order } = request.query;
    const sortByKey = contacts.sort((a, b) => {

        if (order == 'desc') {
            return a[key] < b[key] ? 1 : -1;
        }

        return a[key] > b[key] ? 1 : -1;
    });

    response.json(sortByey);
};

module.exports = { getAll, getOneById, createOne, updateOneById, deleteOneById, sortByQuery }