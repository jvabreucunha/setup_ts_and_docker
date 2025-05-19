import express from 'express';
import router from './routes';
import dontenv from 'dotenv';
import { sequelize } from './config/database';

dontenv.config()

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(router);

sequelize
    .sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Servidor rodando em http://localhost:${PORT}`);
        });
    })
    .catch((err: Error) => {
        console.error('Erro ao sincronizar com o banco:', err);
    });
