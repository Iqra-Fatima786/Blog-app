// mongodb connection logic
import mongoose from "mongoose";
 const Connection = async ()=>{
  const URL=`mongodb+srv://iqranaqvi1514:naqvi1514@blog-app.7jcad.mongodb.net/?retryWrites=true&w=majority&appName=Blog-app`;
  try{
   await mongoose.connect(URL,{useNewUrlParser:true});
    console.log('Database connection established')
  }catch(error)
  {
    console.log('Failed to connect to database', error)
  }
}
export default Connection;