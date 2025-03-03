
import express, { Request, Response, NextFunction } from 'express';
import { getCars } from './controller/controller.js'; 
import cors from 'cors';
import path from 'path';

const app = express();

app.use(cors());
app.use(express.json());


app.get('/cars', getCars);


const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '../frontend')));



app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../frontend', 'index.html')); 
});


app.all('/*', (req: Request, res: Response) => {
    res.status(404).send({ msg: 'Item does not exist' });
  });

// PostgreSQL error handling
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  if (err.code === '22P02') {
   res.status(400).send({ msg: "Invalid type (type is wrong)" });
  } else if (err.code === '22003') {
   res.status(404).send({ msg: "Item does not exist, psql (error 22003)" });
  } else if (err.code === '23502') {
   res.status(404).send({ msg: "Item does not exist (error 23502)" });
  } else {
   next(err);
  }
});

// server error handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err); 
  res.status(500).send({ msg: "Something went wrong" });
});

export default app;