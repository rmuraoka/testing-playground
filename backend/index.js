const app = require('./app');
const sequelize = require('./db');
const PORT =  5000;

sequelize.sync().then(() => {
    console.log('Database synchronized');
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}).catch((err) => {
    console.error('Unable to connect to the database:', err);
});
