import express from 'express';
import cors from 'cors';
import {MongoClient} from 'mongodb';

const app = express();
app.use(cors()); //For enabling cors origin
app.use(express.json()); //For parsing application/json(Enable json for transactions)

const url = "mongodb+srv://2400030294_db_user:MkitsmI6tgGuylkO@cluster0.5kphsvn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const dbName = "erp";

const client= new MongoClient(url);//onject for MongoDB

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get('/', async (req, res) => {
    res.status(200).json('Hello World from Express JS' );
});

// Sample route for testing
// app.get('/api/test', (req, res) => {
//     res.json({ message: 'This is a test endpoint' });
// });

//SIGN UP OPERATION
app.post('/signup', async (req, res) => {
    // res.status(200).json('Response from POST end point');
        try{
          client.connect();                              //Establishing connection with MongoDB
          const db = client.db(dbName);                  //Selecting DB(Connecting with DB)

          db.collection("users").insertOne(req.body);    //Inserting data in collection
          res.status(200).json("Registered Successfully");
        }catch(err){
            console.log(err);
        }
        finally{
            client.close();                             //close the connection
        }
        // res.status(200).json(req.body);

});