import { Request, Response } from 'express';
import express from 'express';
import cors from 'cors';
import loginRouter from './routes/login.routes';
import signupRouter from './routes/signup.routes';

const corsOptions = {
  origin: 'https://lexartlabs-desafio-server.vercel.app/',
  optionsSuccessStatus: 200,
};


const app = express();

app.use(express.json());
app.use(cors(corsOptions));

app.use('/login', loginRouter);
app.use('/sign-up', cors(corsOptions), signupRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
