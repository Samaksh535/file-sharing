import mongoose from 'mongoose';


const DBConnection= async ()=>{
    try{
   await mongoose.connect("mongodb://0.0.0.0:27017/filechannel");
    console.log("database connected successfully")
    }catch(error){
        console.error('Error while connecting the database');
    }
}

export default DBConnection;