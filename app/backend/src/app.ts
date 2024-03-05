import { Request, Response } from 'express';
import express from 'express';
import cors from 'cors';
import loginRouter from './routes/login.routes';
import signupRouter from './routes/signup.routes';
import productRouter from './routes/product.routes';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/login', loginRouter);
app.use('/sign-up', signupRouter);
app.use('/products', productRouter)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
