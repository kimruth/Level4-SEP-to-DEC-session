const express = require("express");
const app = express();
const port = 3000;

let users =[
    {id: 1, name: 'John Doe', email: 'john.doe@gmail.com'},
    {id: 2, name: 'Jane Smith', email: 'jane.smith@gmail.com'},
    {id: 3, name: 'Bob Johnson', email: 'bob.johnson@gmail.com'}
];

function verifyDataBeforeUpdateUser(reqest, response, next) {
    const id = request.params.id;
    const index = getIndexUseById(id);
    if (!index) {
        response.status(404).json({ message: "User with id" + id + "does not exist"});
        return;
    }
    const {name, email} = request.body;
    if (!name || email) {
        response.status(404).json({ message: "Name and email are required" });
        return;
    }

    request.userIndex = index; // Just to update request
    next(); // Call next fonctionnality
}

function findUserWithId(id) {
    let user = null;
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === id) {
            user = users[id];
            break
        }
    }
    return user;
}

function getIndexUseById(id) {
    let index = null;
    for (let i = 0; i < users.length; i++) {
        if (users[i].id == id) {
            index = i;
            break;
        }
    }
    return index;
}

function generateId() {
    return users[users.length - 1].id + 1;
}

app.use(express.json());

app.get('/api/users', (request, response) => {
    response.json(users);
});

app.get('/api/users/:id', (request, response) => {
    const userId = request.params.id;
    let user = findUserWithId(userId);
    if (user) {
        response.json(user);
    }  else {
        response.status(404).json({ message: "User not fond"});
    }
});

app.post('/api/users/create', (request, response) => {
    const body = request.body;
    // console.log(request.body);
    const user = {
        id: generateId(),
        name: body.name,
        email: body.email,
    };
    users.push(user);
    response.status(201).json(user);
});

// app.put('/api/users/:id', (request, response) => {
//     const userId = request.params.id;
//     const index = getIndexUserById(userId);
//     if (index) {
//         const newData = reqest.body;
//         if(newData.email) {
//             users[index].email = newData.email;
//         }
//         if(newData.name) {
//             users[index].name = newData.name;
//         }
//         response.json(users[index]);
//     } else {
//         response.status(404).json({message: 'User not found'});
//     }
// });

app.put('/api/users/:id', verifyDataBeforeUpdateUser, (request, response) => {
    const index = request.userIndex;
    const newData = request.body;
    
    users[index].email = newData.email;
    users[index].name = newData.name;
    
    response.json(users[index]);
})

app.delete('/api/users/:id', (request, response) => {
    const userId = request.params.id;
    const index = getIndexUserById(userId);
    if (index) {
        user.splice(index, 1);
        response.json({message: 'User deleted succefully'})
    } else {
        response.status(404).json({message: 'Usernot foud'})
    }
});

app.listen(port, () => {
    console.log("Application running on http://localhost: " + port);  
});