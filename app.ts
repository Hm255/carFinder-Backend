import express from 'express';
 // Adjust the path as necessary
import {getCars} from './controller/controller.js'
import cors from 'cors'
const app = express();

app.use(cors()); //cross origin resource sharing, this will allow my application to communicate between backend and frontend
app.use(express.json());


app.get('/cars', getCars)

// try {
//   const cars = await fetchCars();
//   res.json(cars);
// } catch (error) {
//   res.status(500).json({ error: 'Failed to fetch cars.' });
// }
app.all('/*', (req, res) => {
    res.status(404).send({ msg: 'Item does not exist' });
  });
  
//   app.use((err, req, res, next) => {
//     if(err.code === '22P02'){
//     res.status(400).send({ msg: "invalid type (type is wrong)" });
//     }
//     else if(err.code === '22003'){
//       res.status(404).send({msg: "Item does not exist"});
//     }
//     else if (err.code === '23502'){
//       res.status(404).send({msg: "Item does not exist"});
//     }
//     else{
//       next()
//     }
//   })
  
  
//   app.use((err, req, res, next) => {
//     res.status(500).send({ msg: "something went wrong" });
  
//   });
  
export default app;