import 'dotenv/config';
import app from "./src/routes/app.js";
import { sequelize } from './src/database/connectionDB.js';


const port = 60000 || process.env - port;


(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully');
        app.listen(port, () => console.log(`server run on port ${port}`));
    } catch (error) {
        console.error('Unable to connect to the database:', error)
    }

}) ()




app.listen(port, () => console.log(`server run on port ${port}`));
