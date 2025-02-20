import express, { Request, Response } from "express";
require("dotenv").config({ path: `./env/${process.env.NODE_ENV}.env` });

const app = express();
const PORT = process.env.PORT || 3000;

import bussinessRoutes from "./routes/businessRoutes";

app.use(express.json());
app.set('env', 'development');
app.set('json spaces', 4);

app.get('/', (req: Request, res: Response) => {
  res.send('Jensen Education Case Assignment');
});

app.use('/businesses', bussinessRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});