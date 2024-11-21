require('dotenv').config;
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect(process.env.DATABASE_URL)

.then(connexion => {

    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use(urlencoded({ entended: false }));

    // ROUTES
    const authRoutes = require('./routes/auth.route')
    const courseRoutes = require('./routes/auth.course')
    const userRoutes = require('./routes/auth.user')

    app.use('./api/auth', authRoutes)
    app.use('./api/course', courseRoutes)
    app.use('./api/user', userRoutes)

    app.use((req, res, next) => {

        return res.status(404).json({
            status: 'NOT FOUD',
            status_code: 404,
            message: 'Requested ressorce not found',
            data: {
                protocol: req.protocol,
                method: req.method.toUpperCase(),
                url: req.originalUrl
            }
        });
    });

    app.use((error, req, res, next) => {

        const status_code = arror.status || 500;
        return res.status(status_code).json({
            status: 'NOT FOUD',
            status_code: status_code,
            message: 'Requested ressorce not found',
            data: {
                error: error.stack,
                protocol: req.protocol,
                method: req.method.toUpperCase(),
                url: req.originalUrl
            }
        });
    });

    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    })
})
.catch((error) => console.error('Error connecting to MongoDB:', error));