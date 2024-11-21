const contacts = [
    { id: 1, name: 'John Doe', phone: 111111111, email: 'johndoe@gmail' },
    { id: 2, name: 'Jane Smith', phone: 222222222, email: 'janesmith@gmail' },
    { id: 3, name: 'John Smith', phone: 333333333, email: 'johnsmith@gmail' },
];

generateId = () => {
    return contacts[contacts.length - 1].id + 1;
};

const getContactIndexWithId = (id) => {
    return contacts.findIndex(contact => contact.id === parseInt)
};

const getAll = (request, response) => {
    response.json(contacts);
};

const getOneById = (request, response) => {
    const { id } = request.params;
    const contact = contacts.find(contact => contact.id === parseInt(id));

    if (!contact) {
        response.status(404).json({ message: 'Contact not found' });
    } else {
        response.json(contact);
    }
};

const createOne = (request, response) => {
    const body = request.body;
    contact.push({
        id: generateId(),
        name: body.name,
        phone: body.phone,
        email: body.email,
    });

    response.status(201).json({
        error: false,
        message: 'Contact create successfully'
    })
};

const updateOneById = (request, response) => {
    const { id } = request.params;
    const index = getContactIndexWithId(id);
    if (index == -1) {
        response.status(404).json({
            error: true,
            message: 'Contact not foud'
        });
        return;
    }

    const { name, email, phone } = request.body
    contacts[index].email = email;
    contacts[index].name = name;
    contacts[index].phone = phone;
    response.json({ error: false, message: 'Contact update successfully' })
};

const deleteOneById = (request, response) => {
    const { id } = request.params;
    const index = getContactIndexWithId(id);
    if (index == -1) {
        response.status(404).json({
            error: true,
            message: 'Contact not found'
        });
        return;
    }

    contacts.splice(index, 1);
    response.json({ error: false, message: 'Contact deleted successfully' });
};

const sortByQuery = (request, response) => {
    const { key, order } = request.query;
    const sortByKey = contacts.sort((a, b) => {

        if (order == 'desc') {
            return a[key] < b[key] ? 1 : -1;
        }

        return a[key] > b[key] ? 1 : -1;
    });

    response.json(sortByKey);
};


module.exports = { getAll, getOneById, createOne, updateOneById, deleteOneById, sortByQuery }