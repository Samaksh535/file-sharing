import express from 'express';
import cors from 'cors';
import router from './routes/routes.js';
import DBConnection from './database/db.js';
const app=express();
const Port=8000;
app.use(cors());
DBConnection();
app.use('/',router);


app.listen(Port,()=>{
    console.log(`Server is running on port ${Port}`);
})