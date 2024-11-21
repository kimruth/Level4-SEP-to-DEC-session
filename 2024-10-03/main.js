const express = require('express');
const fs = require('fs')
const app = express();

app.get("/", (request, response) => {
    response.send('Hello world!');
});

app.get("/about-us", (request, response) => {
    response.send('This is the About page');
});

app.get("/contact-us", (request, response) => {

    fs.readFile('./views/index.html', 'utf8', (err, data) => {
        response.setHeader('Content-type', 'text/html')
        response.send(data.toString());
    })
    // response.send('This is the Contact page');
});

app.get("/api/users", (request, response) => {
    response.send('This is the User page');
});

app.get("/services", (request, response) => {
    response.send('Welcome to services');
});

app.get("/services/web", (request, response) => {
    response.send('Welcome to our web services.')
})

// Creer une route dynamique
app.get("/blog/:id", (request, response) => {
    const id = request.params.id;

    response.send("params is: " + id)
});

app.get("/blog/:category/:subcategory", (request, response) => {
    const category = request.params.category;
    const subcategory = request.params.subcategory;

    response.send("Category is: " + category + "and subcategory is: " + subcategory)
});

app.post("/users/create", (request, response) => {
    response.send("This is post request.");
});

app.listen(3000, () => {
    console.log('Service is running on port 3000');
});