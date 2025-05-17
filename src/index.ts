import express from 'express';
import routes from './routes';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(routes);

app.listen(PORT, () => console.log('🔥 Server started at http://localhost:3000'))
