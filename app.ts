import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());


// app.get('/search', )


// app.all('/*', (req, res) => {
//     res.status(404).send({ msg: 'Item does not exist' });
//   });
  
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
  
//   module.exports = app